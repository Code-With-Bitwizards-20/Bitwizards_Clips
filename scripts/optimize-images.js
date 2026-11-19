const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\ACCER\\.gemini\\antigravity\\brain\\165f9a52-1c45-41cd-85dc-66c0e1056b50';
const publicImgDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
}

// Find generated images in brainDir
const brainFiles = fs.readdirSync(brainDir);

const mapping = [
  { prefix: 'gta6_hero_vice2060', dest: 'gta6-hero-vice2060.webp' },
  { prefix: 'gta6_neon_drift', dest: 'gta6-neon-drift.webp' },
  { prefix: 'gta6_coastal_skyline', dest: 'gta6-coastal-skyline.webp' },
  { prefix: 'gta6_action_stunt', dest: 'gta6-action-stunt.webp' },
];

async function processImages() {
  for (const m of mapping) {
    const found = brainFiles.find(f => f.startsWith(m.prefix) && (f.endsWith('.jpg') || f.endsWith('.png')));
    if (found) {
      const srcPath = path.join(brainDir, found);
      const destPath = path.join(publicImgDir, m.dest);
      console.log(`Converting ${found} -> ${m.dest}`);
      await sharp(srcPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);
      console.log(`Saved ${destPath}`);
    } else {
      console.log(`Warning: file matching ${m.prefix} not found`);
    }
  }

  // Convert bitwizards-logo.png to bitwizards-logo.webp
  const logoPng = path.join(publicImgDir, 'bitwizards-logo.png');
  if (fs.existsSync(logoPng)) {
    const logoWebp = path.join(publicImgDir, 'bitwizards-logo.webp');
    await sharp(logoPng)
      .webp({ quality: 90, effort: 6 })
      .toFile(logoWebp);
    console.log(`Converted logo to ${logoWebp}`);

    // Also generate favicon-32.png and apple-touch-icon.png in public
    const publicDir = path.join(__dirname, '..', 'public');
    await sharp(logoPng).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
    await sharp(logoPng).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Generated favicon.png and apple-touch-icon.png');
  }
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
