const fs = require('fs');
const js = fs.readFileSync('C:/Users/israe/.gemini/antigravity-ide/brain/cd485034-6127-4b00-a8fb-54bacc21ffb9/.system_generated/steps/265/content.md', 'utf8');

console.log('glass-carousel length:', js.length);
['vertexShader', 'fragmentShader', 'createGlassCarousel', 'curved', 'ribbon', 'cards'].forEach(w => {
  const idx = js.indexOf(w);
  console.log(w, idx);
});
