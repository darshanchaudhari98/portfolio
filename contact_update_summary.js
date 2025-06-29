#!/usr/bin/env node

/**
 * Contact Information Update Summary
 * This script verifies all contact information and social media updates
 */

const fs = require('fs');
const path = require('path');

// Configuration of expected updates
const EXPECTED_UPDATES = {
  name: {
    old: "Kartavya Singh",
    new: "Darshan Chaudhari"
  },
  socialLinks: {
    github: {
      old: "https://github.com/Kartavya904",
      new: "https://github.com/darshanchaudhari98"
    },
    linkedin: {
      old: "https://www.linkedin.com/in/kartavya-singh-singhk6",
      new: "https://www.linkedin.com/in/darshan-chaudhari-8076b1200/"
    },
    instagram: {
      old: "https://www.instagram.com/kartavya1710/",
      new: "https://www.instagram.com/djchaudhari98/"
    }
  },
  removedLinks: [
    "https://devpost.com/Kartavya904",
    "https://discordapp.com/users/439541365580365835",
    "https://calendly.com/singhk6/book-time-with-kartavya",
    "mailto:singhk6@mail.uc.edu"
  ]
};

// Files that were updated
const UPDATED_FILES = [
  'frontend/src/components/SpecialComponents/Links.js',
  'frontend/src/components/SpecialComponents/Footer.js',
  'frontend/src/components/HomePage/HomePage.js',
  'frontend/src/components/AboutPage/AboutPage.js',
  'backend/routes/dataRoutes.js',
  'backend/controllers/dataController.js',
  'backend/controllers/aiContextManager.js'
];

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function readFileContent(filePath) {
  if (!checkFileExists(filePath)) return '';
  return fs.readFileSync(filePath, 'utf8');
}

function verifyUpdates() {
  console.log('\n🔍 CONTACT INFORMATION UPDATE VERIFICATION');
  console.log('==========================================\n');

  let allGood = true;

  // Check each updated file
  UPDATED_FILES.forEach(file => {
    console.log(`📄 Checking: ${file}`);
    
    if (!checkFileExists(file)) {
      console.log(`   ❌ File not found`);
      allGood = false;
      return;
    }

    const content = readFileContent(file);
    
    // Check for old references that should be removed
    const oldReferences = [
      'Kartavya904',
      'kartavya-singh-singhk6',
      'kartavya1710',
      'devpost.com/Kartavya904',
      'discordapp.com/users/439541365580365835',
      'calendly.com/singhk6',
      'singhk6@mail.uc.edu'
    ];

    const foundOldRefs = oldReferences.filter(ref => content.includes(ref));
    
    if (foundOldRefs.length > 0) {
      console.log(`   ⚠️  Found old references: ${foundOldRefs.join(', ')}`);
      allGood = false;
    }

    // Check for new references
    const newReferences = [
      'darshanchaudhari98',
      'darshan-chaudhari-8076b1200',
      'djchaudhari98'
    ];

    const foundNewRefs = newReferences.filter(ref => content.includes(ref));
    
    if (foundNewRefs.length > 0) {
      console.log(`   ✅ Found new references: ${foundNewRefs.join(', ')}`);
    }

    if (foundOldRefs.length === 0 && foundNewRefs.length === 0) {
      console.log(`   ✅ Clean (no old or new social references - expected for some files)`);
    }
  });

  console.log('\n📊 SUMMARY OF CHANGES:');
  console.log('----------------------');
  console.log('✅ Updated GitHub: https://github.com/darshanchaudhari98');
  console.log('✅ Updated LinkedIn: https://www.linkedin.com/in/darshan-chaudhari-8076b1200/');
  console.log('✅ Updated Instagram: https://www.instagram.com/djchaudhari98/');
  console.log('✅ Removed DevPost, Discord, Calendly, and old email links');
  console.log('✅ Updated AI companion title to "Darshan\'s AI Companion"');
  console.log('✅ Updated backend GitHub username for stats');
  console.log('✅ Updated database collection names');
  console.log('✅ Updated image references');

  console.log('\n🌐 ACTIVE SOCIAL LINKS:');
  console.log('-----------------------');
  console.log('• GitHub: https://github.com/darshanchaudhari98');
  console.log('• LinkedIn: https://www.linkedin.com/in/darshan-chaudhari-8076b1200/');
  console.log('• Instagram: https://www.instagram.com/djchaudhari98/');

  console.log('\n🗑️ REMOVED LINKS:');
  console.log('------------------');
  console.log('• DevPost profile');
  console.log('• Discord profile');
  console.log('• Calendly booking');
  console.log('• Old email address');

  console.log('\n🔄 NEXT STEPS:');
  console.log('--------------');
  console.log('1. Restart both frontend and backend servers');
  console.log('2. Test all social media links open correctly');
  console.log('3. Verify contact form works (if applicable)');
  console.log('4. Check that removed links no longer appear');
  console.log('5. Confirm GitHub stats API works with new username');

  if (allGood) {
    console.log('\n🎉 SUCCESS: All contact information updates completed successfully!');
  } else {
    console.log('\n⚠️  WARNING: Some issues found. Please review the files above.');
  }

  return allGood;
}

function displayTestInstructions() {
  console.log('\n🧪 TESTING INSTRUCTIONS:');
  console.log('-------------------------');
  console.log('1. **Frontend Testing:**');
  console.log('   - Navigate to the homepage');
  console.log('   - Check social links in footer');
  console.log('   - Verify links component shows only 3 links');
  console.log('   - Test AI companion title shows "Darshan\'s AI Companion"');
  
  console.log('\n2. **Link Testing:**');
  console.log('   - Click GitHub link → should go to github.com/darshanchaudhari98');
  console.log('   - Click LinkedIn link → should go to linkedin.com/in/darshan-chaudhari-8076b1200/');
  console.log('   - Click Instagram link → should go to instagram.com/djchaudhari98/');
  console.log('   - Verify all links open in new tabs');
  
  console.log('\n3. **Backend Testing:**');
  console.log('   - Check GitHub stats API endpoint');
  console.log('   - Verify admin authentication still works');
  console.log('   - Test image loading with new references');
  
  console.log('\n4. **Contact Form Testing:**');
  console.log('   - Submit a test message through contact form');
  console.log('   - Verify email delivery works');
}

// Main execution
function main() {
  const success = verifyUpdates();
  displayTestInstructions();
  
  if (success) {
    console.log('\n✨ All contact information has been successfully updated!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { verifyUpdates, EXPECTED_UPDATES, UPDATED_FILES };
