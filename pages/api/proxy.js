export const config = { api: { responseLimit: false } };

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing url');

  const target = decodeURIComponent(url);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    const response = await fetch(target, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
      },
    });

    clearTimeout(timeout);

    const contentType = response.headers.get('content-type') || 'text/html';
    const finalUrl = response.url || target;
    const base = new URL(finalUrl);
    const origin = base.origin;

    // Non-HTML: proxy straight through
    if (!contentType.includes('text/html')) {
      const buf = await response.arrayBuffer();
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.status(response.status).send(Buffer.from(buf));
    }

    let html = await response.text();

    // Rewrite relative URLs → absolute
    html = html.replace(
      /(\s(?:src|href|action|data-src))\s*=\s*(['"])((?!https?:\/\/|\/\/|data:|blob:|#|mailto:|javascript:)[^'"]*)\2/gi,
      (match, attr, quote, path) => {
        if (!path.trim()) return match;
        const abs = path.startsWith('/')
          ? `${origin}${path}`
          : `${base.href.replace(/\/[^/]*$/, '/')}${path}`;
        return `${attr}=${quote}${abs}${quote}`;
      }
    );

    // Protocol-relative → https
    html = html.replace(
      /(\s(?:src|href))\s*=\s*(['"])(\/\/[^'"]+)\2/gi,
      (_, attr, q, path) => `${attr}=${q}https:${path}${q}`
    );

    const injection = `
<base href="${origin}/" />
<style>
  [class*="cookie"],[id*="cookie"],[class*="Cookie"],[id*="Cookie"],
  [class*="consent"],[class*="gdpr"],[class*="popup"],[class*="modal"],
  [class*="chat-widget"],[id*="chat-widget"],[class*="intercom"],
  [class*="crisp"],[class*="tawk"],[class*="zendesk"],[id*="launcher"]
  { display:none!important; }
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-thumb{background:#FFD700;border-radius:4px}
</style>
<script>
  try {
    Object.defineProperty(window,'top',{get:()=>window});
    Object.defineProperty(window,'parent',{get:()=>window});
    window.open=()=>null;
    window.alert=()=>null;
    window.confirm=()=>true;
  } catch(e){}
</script>`;

    html = /<head[^>]*>/i.test(html)
      ? html.replace(/<head([^>]*)>/i, `<head$1>${injection}`)
      : injection + html;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
    return res.status(200).send(html);

  } catch (err) {
    const isTimeout = err.name === 'AbortError';
    return res.status(200).send(`<!DOCTYPE html><html><body style="margin:0;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#f9fafb;font-family:system-ui;text-align:center;padding:24px">
      <p style="color:#374151;font-weight:700;font-size:15px;margin:0">${isTimeout ? 'Preview timed out' : 'Preview unavailable'}</p>
      <p style="color:#9ca3af;font-size:12px;margin:0">${isTimeout ? 'Site took too long to respond' : err.message}</p>
      <a href="${target}" target="_blank" style="background:#FFD700;color:#111;font-weight:700;padding:10px 24px;border-radius:12px;text-decoration:none;font-size:13px;margin-top:4px">Open Site ↗</a>
    </body></html>`);
  }
}
