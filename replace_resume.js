#!/usr/bin/env node

/**
 * Resume Replacement Helper Script
 * Usage: node replace_resume.js [path-to-your-resume.pdf]
 */

const fs = require('fs');
const path = require('path');

// Configuration
const RESUME_CONFIG = {
  targetPath: 'frontend/src/assets/Darshan_Chaudhari_Resume2025.pdf',
  downloadName: 'Darshan-Chaudhari-Resume-2025.pdf',
  maxSizeBytes: 5 * 1024 * 1024, // 5MB
  
  // Files that reference the resume
  codeReferences: [
    'frontend/src/components/AboutPage/AboutPage.js',
    'frontend/src/components/SpecialComponents/NavBar.js'
  ]
};

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function getFileSize(filePath) {
  if (!checkFileExists(filePath)) return 0;
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function displayCurrentStatus() {
  console.log('\n📄 RESUME REPLACEMENT GUIDE');
  console.log('============================\n');
  
  const currentExists = checkFileExists(RESUME_CONFIG.targetPath);
  const currentSize = getFileSize(RESUME_CONFIG.targetPath);
  
  console.log('📍 CURRENT RESUME STATUS:');
  console.log('-------------------------');
  console.log(`File: ${RESUME_CONFIG.targetPath}`);
  console.log(`Status: ${currentExists ? '✅ EXISTS' : '❌ MISSING'}`);
  if (currentExists) {
    console.log(`Size: ${formatFileSize(currentSize)}`);
    console.log(`Max allowed: ${formatFileSize(RESUME_CONFIG.maxSizeBytes)}`);
    console.log(`Size OK: ${currentSize <= RESUME_CONFIG.maxSizeBytes ? '✅ YES' : '❌ TOO LARGE'}`);
  }
  
  console.log('\n🔧 HOW TO REPLACE:');
  console.log('------------------');
  console.log('1. Save your resume as a PDF file');
  console.log(`2. Name it exactly: ${path.basename(RESUME_CONFIG.targetPath)}`);
  console.log(`3. Place it at: ${RESUME_CONFIG.targetPath}`);
  console.log('4. Restart the frontend server');
  
  console.log('\n📋 REQUIREMENTS:');
  console.log('----------------');
  console.log('• Format: PDF only');
  console.log(`• Max size: ${formatFileSize(RESUME_CONFIG.maxSizeBytes)}`);
  console.log('• Professional content');
  console.log('• Up-to-date information');
  
  console.log('\n🌐 WHERE IT APPEARS:');
  console.log('--------------------');
  console.log('• Navigation bar "RESUME" button');
  console.log('• About page "Resume" button');
  console.log(`• Downloads as: ${RESUME_CONFIG.downloadName}`);
  
  console.log('\n📁 OLD FILES TO CLEAN UP:');
  console.log('-------------------------');
  const oldFiles = [
    'frontend/src/assets/Singh_Kartavya_Resume2024.pdf',
    'frontend/src/assets/Singh_Kartavya_Resume2025.pdf'
  ];
  
  oldFiles.forEach(file => {
    const exists = checkFileExists(file);
    console.log(`${exists ? '🗑️  DELETE' : '✅ CLEAN'}: ${file}`);
  });
}

function validateResume(filePath) {
  if (!checkFileExists(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  const size = getFileSize(filePath);
  if (size > RESUME_CONFIG.maxSizeBytes) {
    console.log(`❌ File too large: ${formatFileSize(size)} (max: ${formatFileSize(RESUME_CONFIG.maxSizeBytes)})`);
    return false;
  }
  
  if (!filePath.toLowerCase().endsWith('.pdf')) {
    console.log('❌ File must be a PDF');
    return false;
  }
  
  console.log(`✅ Resume validation passed: ${formatFileSize(size)}`);
  return true;
}

function replaceResume(sourcePath) {
  if (!validateResume(sourcePath)) {
    return false;
  }
  
  try {
    // Create backup of current resume
    if (checkFileExists(RESUME_CONFIG.targetPath)) {
      const backupPath = RESUME_CONFIG.targetPath + '.backup';
      fs.copyFileSync(RESUME_CONFIG.targetPath, backupPath);
      console.log(`📦 Backup created: ${backupPath}`);
    }
    
    // Copy new resume
    fs.copyFileSync(sourcePath, RESUME_CONFIG.targetPath);
    console.log(`✅ Resume replaced successfully!`);
    console.log(`📄 New resume: ${RESUME_CONFIG.targetPath}`);
    
    return true;
  } catch (error) {
    console.log(`❌ Error replacing resume: ${error.message}`);
    return false;
  }
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    displayCurrentStatus();
    console.log('\n💡 TIP: To replace with a specific file, run:');
    console.log('   node replace_resume.js path/to/your/resume.pdf');
    return;
  }
  
  const sourcePath = args[0];
  console.log(`\n🔄 Attempting to replace resume with: ${sourcePath}`);
  
  if (replaceResume(sourcePath)) {
    console.log('\n🎉 SUCCESS! Resume has been replaced.');
    console.log('🔄 Remember to restart your frontend server to see changes.');
  } else {
    console.log('\n❌ FAILED! Resume replacement unsuccessful.');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { RESUME_CONFIG, validateResume, replaceResume };
