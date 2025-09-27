import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  
  try {
    // Optimize JPEG images
    await imagemin(['public/**/*.{jpg,jpeg}'], {
      destination: 'public/optimized',
      plugins: [
        imageminMozjpeg({ quality: 80 })
      ]
    });
    
    // Optimize PNG images
    await imagemin(['public/**/*.png'], {
      destination: 'public/optimized',
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });
    
    console.log('✅ Images optimized successfully!');
    console.log('📁 Optimized images saved to: public/optimized/');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
