#!/usr/bin/env node

/**
 * Script to update personal assets (images and resume) in the portfolio
 * Usage: node update_personal_assets.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Image files to replace
  images: {
    mainProfile: {
      current: 'frontend/public/Darshan.webp',
      description: 'Main profile picture (homepage)',
      specs: '250x250px, WebP/JPG/PNG'
    },
    aboutProfile: {
      current: 'frontend/public/Darshan-Profile-Photo.webp', 
      description: 'About page profile picture',
      specs: '300x300px, WebP/JPG/PNG'
    }
  },
  
  // Resume file to replace
  resume: {
    current: 'frontend/src/assets/Darshan_Chaudhari_Resume2025.pdf',
    description: 'Resume PDF file',
    specs: 'PDF format'
  }
};

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function displayInstructions() {
  console.log('\n🎯 PERSONAL ASSETS UPDATE GUIDE');
  console.log('=====================================\n');
  
  console.log('📸 IMAGES TO REPLACE:');
  console.log('---------------------');
  
  Object.entries(config.images).forEach(([key, info]) => {
    const exists = checkFileExists(info.current);
    const status = exists ? '✅ EXISTS' : '❌ MISSING';
    
    console.log(`\n${info.description}:`);
    console.log(`   File: ${info.current}`);
    console.log(`   Specs: ${info.specs}`);
    console.log(`   Status: ${status}`);
  });
  
  console.log('\n📄 RESUME TO REPLACE:');
  console.log('---------------------');
  
  const resumeExists = checkFileExists(config.resume.current);
  const resumeStatus = resumeExists ? '✅ EXISTS' : '❌ MISSING';
  
  console.log(`\n${config.resume.description}:`);
  console.log(`   File: ${config.resume.current}`);
  console.log(`   Specs: ${config.resume.specs}`);
  console.log(`   Status: ${resumeStatus}`);
  
  console.log('\n🔧 HOW TO UPDATE:');
  console.log('------------------');
  console.log('1. Replace the files above with your own photos/resume');
  console.log('2. Keep the exact same filenames');
  console.log('3. Restart the frontend server to see changes');
  
  console.log('\n💡 TIPS:');
  console.log('--------');
  console.log('• Use high-quality, professional photos');
  console.log('• WebP format is preferred for images (smaller file size)');
  console.log('• Square aspect ratio works best for profile pictures');
  console.log('• Keep resume file size under 5MB');
  
  console.log('\n🌐 ONLINE TOOLS:');
  console.log('----------------');
  console.log('• Convert to WebP: https://convertio.co/jpg-webp/');
  console.log('• Resize images: https://www.iloveimg.com/resize-image');
  console.log('• Compress PDF: https://www.ilovepdf.com/compress_pdf');
}

function updateFileReferences(newFilenames) {
  console.log('\n🔄 UPDATING FILE REFERENCES...');
  
  // This function would update code references if filenames change
  // For now, we'll just display what would be updated
  
  const filesToUpdate = [
    'frontend/src/components/HomePage/HomePage.js',
    'frontend/src/components/AboutPage/AboutPage.js', 
    'frontend/src/components/SpecialComponents/NavBar.js'
  ];
  
  console.log('Files that would need updates if you change filenames:');
  filesToUpdate.forEach(file => {
    console.log(`   - ${file}`);
  });
}

// Main execution
function main() {
  displayInstructions();
  
  // Check if user wants to update file references
  console.log('\n❓ Need to change filenames?');
  console.log('   Run this script with --help for more options');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { config, checkFileExists, displayInstructions };
