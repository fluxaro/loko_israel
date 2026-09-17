'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Color palette definitions
const PAPER_HEX = '#ffffff';
const PAPER_RGB = [1.0, 1.0, 1.0];
const INK_DARK = '#0e0e10';
const GOLD_ACCENT = '#c8a845';
const LINEN_SAND = '#efeae2';
const PAPER_WHITE = '#faf8f6';

const PROJECTS = [
  {
    motif: 'support',
    num: '01',
    label: 'AI PLATFORM & LLM',
    titleLines: ['Spark AI.', 'Handled.'],
    sub: '~10k daily prompts',
    note: 'Conversational agent with memory persistence and dynamic tool calling.',
    bg: INK_DARK,
    ink: PAPER_WHITE,
    accent: GOLD_ACCENT,
    outcomeLabel: 'PERFORMANCE',
    outcomeVal: '99.9% Uptime · Low Latency Token Stream',
    tags: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS'],
    url: 'https://spark-ai-assistant.vercel.app/',
    description:
      'A low-latency intelligent chat platform providing multi-turn conversational agents with state persistence, markdown code highlighting, and streaming token responses.',
  },
  {
    motif: 'returns',
    num: '02',
    label: 'OPERATIONS & COMMERCE',
    titleLines: ['Return.', 'Reconcile.', 'Refund.'],
    sub: 'Automated lifecycle',
    note: 'One unified flow across warehouse, customer support, and financial ledgers.',
    bg: GOLD_ACCENT, // Loko signature gold!
    ink: INK_DARK,
    accent: INK_DARK,
    outcomeLabel: 'EFFICIENCY',
    outcomeVal: 'Full Audit Trail · Automated Ledger Sync',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Webhooks'],
    url: 'https://clothes-stores-eta.vercel.app/',
    description:
      'Engineered for end-to-end commerce operations: automating returns verification, inventory reconciliation, customer credit issuance, and warehouse routing without manual spreadsheet overhead.',
  },
  {
    motif: 'ops',
    num: '03',
    label: 'SECURITY INTELLIGENCE',
    titleLines: ['Fuzzi.', 'Scoring.'],
    sub: '14 security vectors',
    note: 'Fuzzy-logic scoring across web security dimensions with confidence-weighted simulation.',
    bg: LINEN_SAND,
    ink: INK_DARK,
    accent: GOLD_ACCENT,
    outcomeLabel: 'SECURITY ENGINE',
    outcomeVal: '14-Dimension Vector · Real-time Risk Simulator',
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    url: 'https://fuzzi-ten.vercel.app/',
    description:
      'Fuzzy-logic scoring across fourteen web security dimensions — confidence-weighted risk you can explain, simulate, and monitor in real time.',
  },
  {
    motif: 'shipping',
    num: '04',
    label: 'DOCUMENT ENGINE',
    titleLines: ['SieveEngine'],
    sub: '~2,500 resumes / day',
    note: 'Instant compilation. Zero backend latency. Export pixel-perfect PDFs.',
    bg: INK_DARK,
    ink: GOLD_ACCENT,
    accent: GOLD_ACCENT,
    outcomeLabel: 'PRODUCTION SCALE',
    outcomeVal: 'Sub-Second Client Compilation · Zero Server Cost',
    tags: ['React', 'Tailwind CSS', 'Client-Side PDF', 'WYSIWYG'],
    url: 'https://sieve-inky.vercel.app/',
    description:
      'Sub-second client-side resume compilation with live multi-theme WYSIWYG preview and zero backend compute latency. Powers thousands of exported career documents daily.',
  },
];

// WebGL2 Shaders for the Glass Ribbon Lens
const VERTEX_SHADER = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 frag;
uniform float uAspect, uHalfW, uHalfH, uStep, uScroll, uTime, uFocus, uSelected;
uniform int uCount;
uniform vec3 uPaper;
uniform sampler2D uT0, uT1, uT2, uT3;

vec4 samp(int i, vec2 uv) {
  if (i == 0) return texture(uT0, uv);
  if (i == 1) return texture(uT1, uv);
  if (i == 2) return texture(uT2, uv);
  return texture(uT3, uv);
}

// Sample the continuous strip of cards
vec3 strip(vec2 uv) {
  float x = (uv.x - 0.5) * uAspect;
  float slot = floor(x / uStep + uScroll + 0.5);
  float zoom = 1.0 + 0.48 * uFocus;
  float selectedX = x - (uSelected - uScroll) * uStep;
  if (abs(selectedX) < uHalfW * zoom) slot = uSelected;
  bool selected = abs(slot - uSelected) < 0.1;
  float localX = x - (slot - uScroll) * uStep;
  float y = uv.y - 0.5;
  if (selected) {
    localX /= zoom;
    y /= zoom;
  } else {
    y += uFocus * (1.1 + 0.12 * abs(slot - uSelected));
  }
  if (abs(localX) > uHalfW || abs(y) > uHalfH) return uPaper;
  int index = int(mod(slot, float(uCount)));
  return samp(index, vec2(localX / (2.0 * uHalfW) + 0.5, y / (2.0 * uHalfH) + 0.5)).rgb;
}

void main() {
  vec2 offset = vUv - 0.5;
  float lensAspect = max(uAspect, 2.8);
  vec2 p = offset * vec2(lensAspect, 1.0);
  float angleRotation = 1.134464;
  float c = cos(angleRotation), s = sin(angleRotation);
  p = mat2(c, -s, s, c) * p;
  
  float scale = max(0.55, lensAspect / 1.85);
  float radius = length(p / (vec2(0.565, 1.0) * scale));
  vec3 base = strip(vUv);
  
  if (radius > 1.0) {
    frag = vec4(base, 1.0);
    return;
  }
  
  float angle = atan(p.y, p.x);
  float edgeWeight = uAspect < 1.5 ? smoothstep(0.18, 0.44, abs(offset.x)) : 1.0;
  float rim = smoothstep(0.578, 1.0, radius) * edgeWeight;
  vec2 direction = normalize(offset + vec2(0.000001));
  vec2 tangent = vec2(-direction.y, direction.x);
  float wave = sin(angle * 2.0) * 0.55 + sin(angle) * 0.25;
  vec2 bent = vUv + tangent * wave * rim * 0.4695 * scale * (1.0 - uFocus);
  vec2 dispersion = offset * 0.044 * smoothstep(0.55, 1.0, radius) * edgeWeight * (1.0 - uFocus);
  
  vec3 color = vec3(
    strip(bent - dispersion * 0.5).r,
    strip(bent).g,
    strip(bent + dispersion * 0.5).b
  );
  
  float ring = exp(-pow((radius * 0.5 - 0.49) / 0.014, 2.0));
  float line = exp(-pow((radius * 0.5 - 0.488) / 0.003, 2.0));
  float surface = uAspect < 1.5 ? smoothstep(0.02, 0.2, length(color - uPaper)) * edgeWeight : 1.0;
  
  // Neon cyan/blue glass edge refraction glow
  color += (vec3(0.0, 0.62, 1.0) * ring * 1.2 + line * 0.75) * surface * (1.0 - uFocus);
  
  frag = vec4(mix(base, color, 1.0 - smoothstep(0.93, 1.0, radius)), 1.0);
}`;

function drawCardCanvas(ctx, width, height, project) {
  const m = width * 0.075; // ~48px padding
  
  // 1. Background
  ctx.fillStyle = project.bg;
  ctx.fillRect(0, 0, width, height);

  // 2. Category / Label (Top)
  ctx.fillStyle = project.ink;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.font = '600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(project.label, m, m + 14);

  // 3. Stacked Headline (Middle) - compact and tight!
  const isSingle = project.titleLines.length === 1;
  const isTriple = project.titleLines.length >= 3;
  const fontSize = isSingle ? 104 : isTriple ? 84 : 94;
  ctx.font = `800 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  
  let lineY = isTriple ? height * 0.35 : height * 0.42;
  for (const line of project.titleLines) {
    ctx.fillText(line, m, lineY, width - m * 2);
    lineY += fontSize * 0.94;
  }

  // 4. Subtitle tag (e.g. ~1,300 orders / day or ~2,500 resumes / day)
  if (project.sub) {
    ctx.font = '600 24px monospace, sans-serif';
    ctx.fillStyle = project.ink === INK_DARK ? '#555555' : project.accent || '#ffffff';
    ctx.fillText(project.sub, m, height * 0.61);
  }

  // 5. Card Bottom Note
  ctx.fillStyle = project.ink;
  ctx.font = '400 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const words = project.note.split(' ');
  let curLine = '';
  let noteY = height - m - 36;
  for (const word of words) {
    if (ctx.measureText(curLine + word).width > width - m * 2) {
      ctx.fillText(curLine.trim(), m, noteY);
      curLine = '';
      noteY += 28;
    }
    curLine += word + ' ';
  }
  ctx.fillText(curLine.trim(), m, noteY);
}

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function SystemsInDailyUse() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active project state
  const handleSelectIndex = useCallback((index) => {
    const safeIdx = ((index % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(safeIdx);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'w-full h-full block cursor-grab active:cursor-grabbing touch-none';
    canvas.setAttribute('aria-label', 'Glass carousel preview strip');
    viewport.appendChild(canvas);
    canvasRef.current = canvas;

    let gl = null;
    try {
      gl = canvas.getContext('webgl2', {
        alpha: false,
        antialias: true,
        premultipliedAlpha: false,
      });
    } catch {
      gl = null;
    }

    if (!gl) {
      console.warn('WebGL2 not supported, fallback active');
      return;
    }

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.bindAttribLocation(program, 0, 'aPos');
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    // Geometry buffer
    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    // Uniforms
    const uniforms = {
      focus: gl.getUniformLocation(program, 'uFocus'),
      selected: gl.getUniformLocation(program, 'uSelected'),
      aspect: gl.getUniformLocation(program, 'uAspect'),
      halfW: gl.getUniformLocation(program, 'uHalfW'),
      halfH: gl.getUniformLocation(program, 'uHalfH'),
      step: gl.getUniformLocation(program, 'uStep'),
      scroll: gl.getUniformLocation(program, 'uScroll'),
      time: gl.getUniformLocation(program, 'uTime'),
      count: gl.getUniformLocation(program, 'uCount'),
      paper: gl.getUniformLocation(program, 'uPaper'),
      tex: [0, 1, 2, 3].map((t) => gl.getUniformLocation(program, `uT${t}`)),
    };

    // Textures creation
    const textures = [];
    for (let t = 0; t < 4; t++) {
      const tex = gl.createTexture();
      if (tex) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          1,
          1,
          0,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          new Uint8Array([255, 255, 255, 255])
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        textures.push(tex);
      }
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let viewW = 0;
    let viewH = 0;
    let animId = 0;
    let isDragging = false;
    let pointerId = -1;
    let dragStartX = 0;
    let dragStartScroll = 0;

    // Scroll positions
    let currentScroll = 0; // interpolated v
    let targetScroll = 0;  // target A
    let focusProgress = 0;
    let targetFocus = 0;
    let selectedSlot = 0;
    let pageScrollContribution = 0;

    const resize = () => {
      const rect = viewport.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      viewW = rect.width;
      viewH = rect.height;
      const pixelW = Math.round(rect.width * dpr);
      const pixelH = Math.round(rect.height * dpr);
      if (canvas.width !== pixelW || canvas.height !== pixelH) {
        canvas.width = pixelW;
        canvas.height = pixelH;
      }
      gl.viewport(0, 0, pixelW, pixelH);
    };

    const getMetrics = () => {
      const aspect = viewW / (viewH || 1);
      // Small compact square card proportion!
      const halfH = aspect < 1 ? Math.min(0.24, aspect * 0.34) : 0.24;
      const halfW = halfH;
      const step = halfW * 2 + 0.012; // seamless continuous ribbon
      return { halfW, halfH, step, aspect };
    };

    const render = (timeMs) => {
      const { halfW, halfH, step, aspect } = getMetrics();

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.uniform1f(uniforms.focus, focusProgress);
      gl.uniform1f(uniforms.selected, selectedSlot);
      gl.uniform1f(uniforms.aspect, aspect);
      gl.uniform1f(uniforms.halfW, halfW);
      gl.uniform1f(uniforms.halfH, halfH);
      gl.uniform1f(uniforms.step, step);
      gl.uniform1f(uniforms.scroll, currentScroll);
      gl.uniform1f(uniforms.time, timeMs / 1000);
      gl.uniform1i(uniforms.count, 4);
      gl.uniform3f(uniforms.paper, PAPER_RGB[0], PAPER_RGB[1], PAPER_RGB[2]);

      for (let p = 0; p < textures.length; p++) {
        gl.activeTexture(gl.TEXTURE0 + p);
        gl.bindTexture(gl.TEXTURE_2D, textures[p]);
        gl.uniform1i(uniforms.tex[p], p);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };

    let isRunning = true;
    const loop = (t) => {
      if (!isRunning) return;

      // Smooth interpolation toward target scroll
      if (!isDragging) {
        currentScroll += (targetScroll - currentScroll) * 0.12;
      }

      focusProgress += (targetFocus - focusProgress) * 0.1;

      // Update active index
      const normalizedIdx = Math.round(currentScroll);
      handleSelectIndex(normalizedIdx);

      render(t);
      animId = requestAnimationFrame(loop);
    };

    // Draw all 4 project textures on 640x640 offscreen canvas
    const drawTextures = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = 640;
      offscreen.height = 640;
      const ctx = offscreen.getContext('2d');
      if (!ctx) return;

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      for (let i = 0; i < PROJECTS.length && i < textures.length; i++) {
        drawCardCanvas(ctx, 640, 640, PROJECTS[i]);
        gl.bindTexture(gl.TEXTURE_2D, textures[i]);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          offscreen
        );
      }
    };

    // User Interaction Handlers
    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      pointerId = e.pointerId;
      isDragging = true;
      dragStartX = e.clientX;
      dragStartScroll = currentScroll;
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!isDragging || !viewW) return;
      const { step, aspect } = getMetrics();
      const deltaX = ((e.clientX - dragStartX) * aspect) / viewW;
      currentScroll = dragStartScroll - deltaX / step;
      targetScroll = currentScroll;
    };

    const onPointerUp = (e) => {
      if (!isDragging || e.pointerId !== pointerId) return;
      isDragging = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}

      // If it was a quick click/tap on a card
      if (Math.abs(e.clientX - dragStartX) < 6) {
        const rect = canvas.getBoundingClientRect();
        const { step, halfW, halfH } = getMetrics();
        const normX = (e.clientX - rect.left - viewW / 2) / (viewH || 1);
        const normY = (e.clientY - rect.top - viewH / 2) / (viewH || 1);

        if (Math.abs(normY) < halfH) {
          const clickedSlot = Math.round(normX / step + currentScroll);
          if (Math.abs(normX - (clickedSlot - currentScroll) * step) < halfW) {
            targetScroll = clickedSlot;
            selectedSlot = clickedSlot;
            handleSelectIndex(clickedSlot);
          }
        }
      } else {
        // Snap to closest integer slot
        targetScroll = Math.round(currentScroll);
      }
    };

    // Wheel scrub
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        targetScroll += e.deltaX * 0.003;
      }
    };

    // Page vertical scroll driver: as user scrolls down the page,
    // the carousel smoothly scrolls to the right!
    const onWindowScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const totalSpan = winH + rect.height;
      const progress = (winH - rect.top) / totalSpan;
      const clamped = Math.max(0, Math.min(1, progress));
      
      // Advance ~2.8 card lengths across the section scroll
      const newContribution = clamped * 2.8;
      const delta = newContribution - pageScrollContribution;
      pageScrollContribution = newContribution;
      
      if (!isDragging) {
        targetScroll += delta;
      }
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onWindowScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(viewport);

    // Initial setup
    resize();
    drawTextures();
    animId = requestAnimationFrame(loop);

    // Expose engine controls to React
    engineRef.current = {
      goTo: (slot) => {
        targetScroll = slot;
      },
      next: () => {
        targetScroll = Math.round(currentScroll) + 1;
      },
      prev: () => {
        targetScroll = Math.round(currentScroll) - 1;
      },
    };

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onWindowScroll);
      textures.forEach((tex) => gl.deleteTexture(tex));
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
      canvas.remove();
    };
  }, [handleSelectIndex]);

  const activeProject = PROJECTS[activeIndex] || PROJECTS[0];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-white border-t border-zinc-200 overflow-hidden select-none"
    >
      {/* Section Header - Harmonized with Site Design System */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 sm:mb-14">
        <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2 font-medium">
          Production Systems
        </span>
        <h2 className="font-serif italic text-4xl lg:text-5xl text-[#1a1a1a] tracking-normal mb-3">
          Systems in Daily Use
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Built and maintained alongside the people who use them.
        </p>
      </div>

      {/* WebGL Glass Ribbon Stage */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => engineRef.current?.prev()}
            className="hidden sm:flex w-12 h-12 rounded-full border border-zinc-300 bg-white/90 hover:bg-black hover:text-white hover:border-black items-center justify-center transition-all duration-200 z-10 shrink-0 shadow-sm cursor-pointer"
            aria-label="Previous system"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Canvas Viewport */}
          <div
            ref={viewportRef}
            className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] bg-white rounded-xl overflow-hidden focus:outline-none"
            tabIndex={0}
            aria-label="Interactive Systems in Daily Use glass carousel. Drag or scroll to explore."
          />

          {/* Next Button */}
          <button
            type="button"
            onClick={() => engineRef.current?.next()}
            className="hidden sm:flex w-12 h-12 rounded-full border border-zinc-300 bg-white/90 hover:bg-black hover:text-white hover:border-black items-center justify-center transition-all duration-200 z-10 shrink-0 shadow-sm cursor-pointer"
            aria-label="Next system"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Meta: Counter, Indicator Dots & Hint */}
        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
          <span className="font-mono text-sm font-bold text-zinc-500 tabular-nums tracking-wider">
            {activeProject.num} / 04
          </span>

          <div className="flex items-center gap-2" role="tablist">
            {PROJECTS.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to system ${p.num}`}
                  onClick={() => engineRef.current?.goTo(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-8 bg-[#c8a845]'
                      : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                />
              );
            })}
          </div>

          <span className="text-xs font-mono text-zinc-400 tracking-wide">
            DRAG CARDS OR SCROLL PAGE
          </span>
        </div>

        {/* Active System Details Card */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto border-t border-zinc-200 pt-8 sm:pt-10 transition-opacity duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Main Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c8a845] font-bold">
                  {activeProject.label}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="font-mono text-xs text-zinc-500">
                  {activeProject.sub}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#141414] tracking-tight">
                {activeProject.titleLines.join(' ')}
              </h3>

              <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Outcome & Action */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                  {activeProject.outcomeLabel}
                </span>
                <p className="font-sans font-semibold text-sm text-[#141414] leading-snug mb-5">
                  {activeProject.outcomeVal}
                </p>
              </div>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#c8a845] hover:text-[#141414] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-200 shadow-sm group"
              >
                <span>Explore Live</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
