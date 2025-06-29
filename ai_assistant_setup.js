#!/usr/bin/env node

/**
 * AI Assistant Setup and Testing Script
 * This script helps configure and test the AI assistant functionality
 */

const fs = require('fs');
const path = require('path');

// Configuration
const AI_CONFIG = {
  name: "Darshan Chaudhari",
  title: "Darshan's AI Companion",
  description: "AI assistant for Darshan Chaudhari's portfolio",
  
  // Required files and directories
  requiredFiles: [
    'backend/controllers/aiContextManager.js',
    'backend/routes/aiRoutes.js',
    'backend/data/Darshan_Chaudhari_Resume2025.pdf',
    'frontend/src/components/WindowModal/AIChatTab.js',
    'frontend/src/App.js'
  ],
  
  // Environment variables needed
  requiredEnvVars: [
    'OPENAI_API_KEY',
    'GITHUB_TOKEN',
    'REACT_APP_API_URI'
  ],
  
  // API endpoints to test
  apiEndpoints: [
    '/ai/ask-chat',
    '/ai/optimize-query',
    '/ai/suggestFollowUpQuestions',
    '/ai/snapshotMemoryUpdate'
  ]
};

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function checkEnvironmentVariables() {
  console.log('\n🔧 CHECKING ENVIRONMENT VARIABLES:');
  console.log('-----------------------------------');
  
  let allEnvVarsPresent = true;
  
  AI_CONFIG.requiredEnvVars.forEach(envVar => {
    const value = process.env[envVar];
    const status = value ? '✅ SET' : '❌ MISSING';
    console.log(`${envVar}: ${status}`);
    
    if (!value) {
      allEnvVarsPresent = false;
    }
  });
  
  return allEnvVarsPresent;
}

function checkRequiredFiles() {
  console.log('\n📁 CHECKING REQUIRED FILES:');
  console.log('----------------------------');
  
  let allFilesPresent = true;
  
  AI_CONFIG.requiredFiles.forEach(file => {
    const exists = checkFileExists(file);
    const status = exists ? '✅ EXISTS' : '❌ MISSING';
    console.log(`${file}: ${status}`);
    
    if (!exists) {
      allFilesPresent = false;
    }
  });
  
  return allFilesPresent;
}

function verifyNameUpdates() {
  console.log('\n👤 VERIFYING NAME UPDATES:');
  console.log('---------------------------');
  
  const filesToCheck = [
    'frontend/src/components/WindowModal/AIChatTab.js',
    'backend/controllers/aiContextManager.js',
    'frontend/src/App.js'
  ];
  
  let allUpdated = true;
  
  filesToCheck.forEach(file => {
    if (!checkFileExists(file)) {
      console.log(`${file}: ❌ FILE NOT FOUND`);
      allUpdated = false;
      return;
    }
    
    const content = fs.readFileSync(file, 'utf8');
    const hasOldName = content.includes('Kartavya Singh') || content.includes('Kartavya\'s');
    const hasNewName = content.includes('Darshan Chaudhari') || content.includes('Darshan\'s');
    
    if (hasOldName) {
      console.log(`${file}: ⚠️  STILL HAS OLD NAME REFERENCES`);
      allUpdated = false;
    } else if (hasNewName) {
      console.log(`${file}: ✅ UPDATED TO NEW NAME`);
    } else {
      console.log(`${file}: ℹ️  NO NAME REFERENCES (OK)`);
    }
  });
  
  return allUpdated;
}

function displayAIConfiguration() {
  console.log('\n🤖 AI ASSISTANT CONFIGURATION:');
  console.log('-------------------------------');
  console.log(`Name: ${AI_CONFIG.name}`);
  console.log(`Title: ${AI_CONFIG.title}`);
  console.log(`Description: ${AI_CONFIG.description}`);
  
  console.log('\n📋 FEATURES:');
  console.log('• Natural language conversation');
  console.log('• Context-aware responses');
  console.log('• Follow-up question suggestions');
  console.log('• Conversation memory');
  console.log('• Voice input support');
  console.log('• Real-time typing animation');
}

function displayStartupInstructions() {
  console.log('\n🚀 STARTUP INSTRUCTIONS:');
  console.log('-------------------------');
  
  console.log('\n1. **Backend Setup:**');
  console.log('   cd backend');
  console.log('   npm install');
  console.log('   npm start');
  
  console.log('\n2. **Frontend Setup:**');
  console.log('   cd frontend');
  console.log('   npm install');
  console.log('   npm start');
  
  console.log('\n3. **Access AI Assistant:**');
  console.log('   • Open http://localhost:3000');
  console.log('   • Click the AI chat icon (bottom right)');
  console.log('   • Or click "AI Companion" in navigation');
  
  console.log('\n4. **Test AI Features:**');
  console.log('   • Ask questions about Darshan\'s experience');
  console.log('   • Try voice input (microphone button)');
  console.log('   • Check follow-up suggestions');
  console.log('   • Test conversation memory');
}

function displayTroubleshooting() {
  console.log('\n🔧 TROUBLESHOOTING:');
  console.log('-------------------');
  
  console.log('\n**Common Issues:**');
  console.log('• AI not responding → Check OPENAI_API_KEY');
  console.log('• Context not loading → Check resume file path');
  console.log('• GitHub stats failing → Check GITHUB_TOKEN');
  console.log('• Frontend errors → Check REACT_APP_API_URI');
  
  console.log('\n**Debug Steps:**');
  console.log('1. Check browser console for errors');
  console.log('2. Check backend logs for API errors');
  console.log('3. Verify environment variables');
  console.log('4. Test API endpoints manually');
  
  console.log('\n**API Testing:**');
  AI_CONFIG.apiEndpoints.forEach(endpoint => {
    console.log(`• POST ${process.env.REACT_APP_API_URI || 'http://localhost:5000'}${endpoint}`);
  });
}

function generateTestQueries() {
  console.log('\n💬 SAMPLE TEST QUERIES:');
  console.log('-----------------------');
  
  const testQueries = [
    "Tell me about Darshan's background",
    "What programming languages does Darshan know?",
    "What projects has Darshan worked on?",
    "What is Darshan's experience with mobile development?",
    "Tell me about Darshan's education",
    "What technologies does Darshan specialize in?"
  ];
  
  testQueries.forEach((query, index) => {
    console.log(`${index + 1}. "${query}"`);
  });
}

// Main execution
function main() {
  console.log('\n🤖 AI ASSISTANT SETUP & CONFIGURATION');
  console.log('======================================');
  
  const filesOK = checkRequiredFiles();
  const envOK = checkEnvironmentVariables();
  const namesOK = verifyNameUpdates();
  
  displayAIConfiguration();
  
  if (filesOK && envOK && namesOK) {
    console.log('\n🎉 SUCCESS: AI Assistant is properly configured!');
    displayStartupInstructions();
    generateTestQueries();
  } else {
    console.log('\n⚠️  WARNING: Some configuration issues found.');
    console.log('\nPlease fix the issues above before starting the AI assistant.');
  }
  
  displayTroubleshooting();
  
  console.log('\n✨ AI Assistant ready for Darshan Chaudhari\'s portfolio!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { AI_CONFIG, checkFileExists, verifyNameUpdates };
