// Database seeding script to populate the database with sample data
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || "KartavyaPortfolioDB";

if (!uri) {
  console.error("❌ MONGO_URI must be set in .env");
  process.exit(1);
}

// Sample data for skills collections - Updated with new technical skills
const skillsCollectionData = [
  {
    "title": "Programming Languages",
    "description": "Core programming languages with strong proficiency and practical experience.",
    "skills": [
      {"logo": "c", "name": "C", "proficiency": "proficient"},
      {"logo": "solidity", "name": "Solidity", "proficiency": "proficient"},
      {"logo": "dart", "name": "Dart", "proficiency": "proficient"},
      {"logo": "python", "name": "Python", "proficiency": "proficient"},
      {"logo": "html", "name": "HTML", "proficiency": "proficient"},
      {"logo": "css", "name": "CSS", "proficiency": "proficient"},
      {"logo": "javascript", "name": "JavaScript", "proficiency": "proficient"}
    ]
  },
  {
    "title": "Frameworks & Technologies",
    "description": "Modern frameworks and technology stacks for comprehensive development.",
    "skills": [
      {"logo": "flutter", "name": "Flutter", "proficiency": "proficient"},
      {"logo": "firebase", "name": "Firebase", "proficiency": "proficient"},
      {"logo": "mongodb", "name": "MongoDB", "proficiency": "proficient"},
      {"logo": "express", "name": "Express", "proficiency": "proficient"},
      {"logo": "react", "name": "React", "proficiency": "proficient"},
      {"logo": "nodejs", "name": "Node.js", "proficiency": "proficient"}
    ]
  },
  {
    "title": "Development Tools",
    "description": "Essential tools for version control, development, and design workflows.",
    "skills": [
      {"logo": "git", "name": "Git", "proficiency": "proficient"},
      {"logo": "github", "name": "GitHub", "proficiency": "proficient"},
      {"logo": "android_studio", "name": "Android Studio", "proficiency": "proficient"},
      {"logo": "vscode", "name": "VS Code", "proficiency": "proficient"},
      {"logo": "firebase", "name": "Firebase", "proficiency": "proficient"},
      {"logo": "figma", "name": "Figma", "proficiency": "intermediate"},
      {"logo": "canva", "name": "Canva", "proficiency": "intermediate"}
    ]
  },
  {
    "title": "Specialized Skills",
    "description": "Advanced practices and methodologies for professional development.",
    "skills": [
      {"logo": "api", "name": "API Integration", "proficiency": "proficient"},
      {"logo": "ux", "name": "UI/UX Design", "proficiency": "proficient"},
      {"logo": "problem_solving", "name": "Problem-Solving", "proficiency": "proficient"},
      {"logo": "ai", "name": "AI/ML (GANs)", "proficiency": "intermediate"}
    ]
  }
];

const skillsTableData = [
  {
    "Labels": ["Mobile Development", "Cross-Platform", "UI Design", "Performance", "User Experience"],
    "Scores": [4.9, 4.8, 4.7, 4.6, 4.8],
    "skillTitle": "Flutter Development",
    "skillDescription": "Expert in Flutter framework for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with exceptional performance."
  },
  {
    "Labels": ["Frontend Design", "Backend Logic", "API Integration", "Responsiveness", "User Experience"],
    "Scores": [4.8, 4.7, 4.9, 4.8, 4.7],
    "skillTitle": "MERN Stack",
    "skillDescription": "Proficient in full-stack development using MongoDB, Express.js, React, and Node.js to create scalable, modern web applications with seamless user experiences."
  },
  {
    "Labels": ["Smart Contracts", "DeFi", "Security", "Gas Optimization", "Blockchain Architecture"],
    "Scores": [4.6, 4.5, 4.7, 4.4, 4.5],
    "skillTitle": "Blockchain Development",
    "skillDescription": "Skilled in Solidity programming for Ethereum smart contracts, with focus on security best practices and efficient blockchain application development."
  },
  {
    "Labels": ["Version Control", "Collaboration", "Code Review", "Branching", "Project Management"],
    "Scores": [4.9, 4.8, 4.7, 4.8, 4.6],
    "skillTitle": "Git & GitHub",
    "skillDescription": "Advanced proficiency in version control systems, collaborative development workflows, and project management using Git and GitHub platforms."
  },
  {
    "Labels": ["Cloud Services", "Real-time Database", "Authentication", "Hosting", "Analytics"],
    "Scores": [4.7, 4.8, 4.6, 4.7, 4.5],
    "skillTitle": "Firebase",
    "skillDescription": "Comprehensive experience with Firebase ecosystem for backend services, real-time databases, authentication, and cloud hosting solutions."
  },
  {
    "Labels": ["Problem Analysis", "Algorithm Design", "Debugging", "Optimization", "Critical Thinking"],
    "Scores": [4.9, 4.8, 4.7, 4.6, 4.9],
    "skillTitle": "Problem-Solving",
    "skillDescription": "Strong analytical and problem-solving skills with systematic approach to breaking down complex challenges and implementing efficient solutions."
  },
  {
    "Labels": ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    "Scores": [4.5, 4.6, 4.7, 4.5, 4.4],
    "skillTitle": "UI/UX Design",
    "skillDescription": "Solid foundation in user interface and user experience design principles, creating intuitive and accessible digital experiences."
  },
  {
    "Labels": ["Neural Networks", "Computer Vision", "Deep Learning", "Model Training", "Innovation"],
    "Scores": [4.3, 4.4, 4.2, 4.1, 4.5],
    "skillTitle": "AI/ML (GANs)",
    "skillDescription": "Emerging expertise in artificial intelligence and machine learning, particularly in Generative Adversarial Networks and computer vision applications."
  }
];

// Sample projects data
const projectsData = [
  {
    "projectTitle": "Flutter Mobile Application",
    "projectTagline": "Cross-platform mobile application built with Flutter and Dart for seamless user experience.",
    "projectTechnologies": ["Flutter", "Dart", "Firebase", "Android Studio"],
    "projectLink": "flutter-mobile-app",
    "projectParagraphs": [
      "A comprehensive mobile application developed using Flutter framework, demonstrating proficiency in cross-platform development and modern mobile UI/UX design principles.",
      "The application leverages Firebase for backend services, real-time data synchronization, and user authentication, showcasing full-stack mobile development capabilities."
    ],
    "projectImages": [],
    "projectURLs": ["https://github.com/example/flutter-app"]
  },
  {
    "projectTitle": "MERN Stack Web Application",
    "projectTagline": "Full-stack web application using MongoDB, Express.js, React, and Node.js with modern development practices.",
    "projectTechnologies": ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    "projectLink": "mern-web-app",
    "projectParagraphs": [
      "A robust web application built with the MERN stack, featuring responsive design, RESTful API integration, and efficient state management.",
      "Implemented modern development practices including version control with Git, component-based architecture, and optimized performance for enhanced user experience."
    ],
    "projectImages": [],
    "projectURLs": ["https://github.com/example/mern-app"]
  }
];

async function seedDatabase() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    
    const db = client.db(dbName);
    
    // Clear existing data
    console.log("🧹 Clearing existing data...");
    await db.collection("skillsCollection").deleteMany({});
    await db.collection("skillsTable").deleteMany({});
    await db.collection("projectTable").deleteMany({});
    
    // Insert skills collection data
    console.log("📊 Inserting skills collection data...");
    const skillsResult = await db.collection("skillsCollection").insertMany(skillsCollectionData);
    console.log(`✅ Inserted ${skillsResult.insertedCount} skill categories`);
    
    // Insert skills table data (for radar charts)
    console.log("📈 Inserting skills table data...");
    const skillsTableResult = await db.collection("skillsTable").insertMany(skillsTableData);
    console.log(`✅ Inserted ${skillsTableResult.insertedCount} skill components`);
    
    // Insert sample projects data
    console.log("🚀 Inserting projects data...");
    const projectsResult = await db.collection("projectTable").insertMany(projectsData);
    console.log(`✅ Inserted ${projectsResult.insertedCount} projects`);
    
    console.log("🎉 Database seeding completed successfully!");
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await client.close();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run the seeding script
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase };
