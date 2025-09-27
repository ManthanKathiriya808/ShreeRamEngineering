import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function compressImages() {
  console.log('🗜️  Compressing SRE images for GitHub...');
  
  try {
    const srePath = 'public/sre';
    const originalSize = getFolderSize(srePath);
    console.log(`📊 Original size: ${formatBytes(originalSize)}`);
    
    let processed = 0;
    let totalSaved = 0;
    
    // Process all images recursively
    await processDirectory(srePath);
    
    async function processDirectory(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          await processDirectory(itemPath);
        } else if (isImageFile(item)) {
          try {
            const originalSize = stats.size;
            const ext = path.extname(item).toLowerCase();
            
            let output;
            if (['.jpg', '.jpeg'].includes(ext)) {
              output = await sharp(itemPath)
                .jpeg({ quality: 40, progressive: true })
                .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
                .toBuffer();
            } else if (ext === '.png') {
              output = await sharp(itemPath)
                .png({ quality: 40, compressionLevel: 9 })
                .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
                .toBuffer();
            } else {
              continue;
            }
            
            if (output.length < originalSize) {
              fs.writeFileSync(itemPath, output);
              const saved = originalSize - output.length;
              totalSaved += saved;
              processed++;
              console.log(`✅ ${item}: ${formatBytes(originalSize)} → ${formatBytes(output.length)} (saved ${formatBytes(saved)})`);
            } else {
              console.log(`⏭️  ${item}: already optimized`);
            }
          } catch (error) {
            console.warn(`⚠️  Failed to compress ${item}:`, error.message);
          }
        }
      }
    }
    
    const finalSize = getFolderSize(srePath);
    const reduction = ((originalSize - finalSize) / originalSize * 100).toFixed(1);
    
    console.log('\n📊 Compression Results:');
    console.log(`📁 Original: ${formatBytes(originalSize)}`);
    console.log(`📁 Final: ${formatBytes(finalSize)}`);
    console.log(`💾 Total saved: ${formatBytes(totalSaved)} (${reduction}%)`);
    console.log(`✅ Processed: ${processed} files`);
    console.log('🚀 Images are now optimized for GitHub upload!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
}

function getFolderSize(folderPath) {
  let totalSize = 0;
  const items = fs.readdirSync(folderPath);
  
  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      totalSize += getFolderSize(itemPath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

compressImages();
