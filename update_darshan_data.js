const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Skills data based on Darshan's resume
const skillsData = [
  {
    title: "Programming Languages",
    description: "Core programming languages with hands-on experience in development.",
    skills: [
      { logo: "python", name: "Python", proficiency: "proficient" },
      { logo: "javascript", name: "JavaScript", proficiency: "proficient" },
      { logo: "dart", name: "Dart", proficiency: "proficient" },
      { logo: "html", name: "HTML", proficiency: "proficient" },
      { logo: "css", name: "CSS", proficiency: "proficient" }
    ]
  },
  {
    title: "Frameworks & Technologies",
    description: "Modern frameworks and technologies for mobile and web development.",
    skills: [
      { logo: "flutter", name: "Flutter", proficiency: "proficient" },
      { logo: "firebase", name: "Firebase", proficiency: "proficient" },
      { logo: "mongodb", name: "MongoDB", proficiency: "intermediate" },
      { logo: "express", name: "Express", proficiency: "intermediate" },
      { logo: "react", name: "React", proficiency: "intermediate" },
      { logo: "nodejs", name: "Node.js", proficiency: "intermediate" }
    ]
  },
  {
    title: "Development Tools",
    description: "Essential tools for development, version control, and design.",
    skills: [
      { logo: "git", name: "Git", proficiency: "proficient" },
      { logo: "github", name: "GitHub", proficiency: "proficient" },
      { logo: "vscode", name: "VS Code", proficiency: "proficient" },
      { logo: "androidstudio", name: "Android Studio", proficiency: "proficient" },
      { logo: "postman", name: "Postman", proficiency: "intermediate" },
      { logo: "figma", name: "Figma", proficiency: "intermediate" },
      { logo: "canva", name: "Canva", proficiency: "intermediate" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Experience with AI/ML technologies and frameworks.",
    skills: [
      { logo: "tensorflow", name: "AI/ML", proficiency: "intermediate" },
      { logo: "python", name: "GANs", proficiency: "beginner" }
    ]
  },
  {
    title: "Platforms & Domains",
    description: "Development platforms and problem-solving domains.",
    skills: [
      { logo: "web", name: "Web Development", proficiency: "proficient" },
      { logo: "mobile", name: "Mobile Development", proficiency: "proficient" },
      { logo: "api", name: "API Integration", proficiency: "intermediate" },
      { logo: "ui", name: "UI/UX Design", proficiency: "intermediate" },
      { logo: "problem", name: "Problem Solving", proficiency: "proficient" }
    ]
  }
];

// Education data
const educationData = [
  {
    experienceTitle: "Bachelor of Engineering (B.E.) Electronics And Computer Science",
    experienceCompany: "Educational Institution",
    experienceLocation: "India",
    experienceStartDate: "2023-01-01",
    experienceEndDate: "2027-12-31",
    experienceDescription: "Currently pursuing B.Tech in Electronics and Computer Science with focus on software development, mobile applications, and AI technologies.",
    experienceCategory: "Education",
    experienceLink: "btech-ecs-education",
    experienceImages: [],
    experienceSkills: ["Electronics", "Computer Science", "Software Development", "Mobile Development"],
    experienceHighlights: [
      "Specialized in Electronics and Computer Science",
      "Focus on practical software development",
      "Mobile application development expertise",
      "AI and machine learning coursework"
    ]
  }
];

// Achievements data
const achievementsData = [
  {
    honorsExperienceTitle: "Impact: 5% reduction driven adopted CompuStock",
    honorsExperienceDescription: "Successfully increased their daily income through efficient allocation and optimization of the CompuStock mobile app for a rideshare ride-sharing platform, resulting in a 5% reduction in operational costs and improved driver earnings.",
    honorsExperienceCategory: "Achievement",
    honorsExperienceLink: "compustock-impact-achievement",
    honorsExperienceImages: [],
    honorsExperienceDate: "2025-01-01",
    honorsExperienceHighlights: [
      "5% reduction in operational costs",
      "Improved driver daily income",
      "Efficient resource allocation",
      "Successful platform optimization"
    ]
  },
  {
    honorsExperienceTitle: "Recognized for creating impactful solutions with 100+ users",
    honorsExperienceDescription: "Developed and deployed mobile applications that have been adopted by over 100 users, demonstrating the practical impact and usability of the solutions created.",
    honorsExperienceCategory: "Recognition",
    honorsExperienceLink: "100-users-recognition",
    honorsExperienceImages: [],
    honorsExperienceDate: "2024-12-01",
    honorsExperienceHighlights: [
      "100+ active users",
      "Impactful solution development",
      "User adoption and engagement",
      "Real-world application success"
    ]
  }
];

// Projects data based on Darshan's resume
const projectsData = [
  {
    projectTitle: "CompuStock - Smart Rideshare Ride-Sharing Platform",
    projectDescription: "Developed and customized the CompuStock mobile app for a rideshare ride-sharing platform using Flutter and Firebase. The app includes features for ride booking, real-time tracking, and user management.",
    projectTechStack: ["Flutter", "Firebase", "Dart", "Mobile Development"],
    projectCategory: "Mobile Application",
    projectLink: "compustock-rideshare",
    projectImages: [],
    projectStartDate: "2025-01-01",
    projectEndDate: "2025-01-31",
    projectStatus: "In Progress",
    projectFeatures: [
      "Ride booking and management system",
      "Real-time GPS tracking and navigation",
      "User authentication and profile management",
      "Payment gateway integration",
      "Driver and passenger matching algorithm",
      "In-app messaging and notifications"
    ],
    projectHighlights: [
      "Implemented real-time location tracking using Firebase",
      "Developed custom UI components for enhanced user experience",
      "Integrated secure payment processing",
      "Built scalable backend architecture"
    ]
  },
  {
    projectTitle: "AI-Powered Public Transport Ticketing App",
    projectDescription: "Developed an AI-powered mobile application for public transport ticketing with features like route optimization, real-time updates, and smart fare calculation. The app uses machine learning for traffic analysis and route suggestions.",
    projectTechStack: ["Flutter", "AI/ML", "Firebase", "Python", "REST APIs"],
    projectCategory: "AI/Mobile Application",
    projectLink: "ai-transport-ticketing",
    projectImages: [],
    projectStartDate: "2024-07-01",
    projectEndDate: "2024-09-30",
    projectStatus: "Completed",
    projectFeatures: [
      "AI-powered route optimization",
      "Real-time public transport tracking",
      "Smart fare calculation system",
      "Digital ticket booking and validation",
      "Traffic analysis and predictions",
      "Multi-modal transport integration"
    ],
    projectHighlights: [
      "Implemented machine learning algorithms for route optimization",
      "Integrated real-time data from multiple transport APIs",
      "Developed predictive models for traffic analysis",
      "Created intuitive user interface for seamless experience"
    ]
  }
];

// Function to clear existing skills and add new ones
async function updateSkills() {
  try {
    console.log('Updating skills data...');
    
    // First, get existing skills to delete them
    const existingSkills = await axios.get(`${API_URL}/getskills`);
    
    // Delete existing skills (you'll need admin authentication for this)
    // For now, we'll just add new skills
    
    // Add new skills
    for (const skillCategory of skillsData) {
      try {
        const response = await axios.post(`${API_URL}/addskill`, skillCategory);
        console.log(`Added skill category: ${skillCategory.title}`);
      } catch (error) {
        console.error(`Error adding skill category ${skillCategory.title}:`, error.response?.data || error.message);
      }
    }
    
    console.log('Skills update completed!');
  } catch (error) {
    console.error('Error updating skills:', error.response?.data || error.message);
  }
}

// Function to update projects
async function updateProjects() {
  try {
    console.log('Updating projects data...');

    // Add new projects
    for (const project of projectsData) {
      try {
        const response = await axios.post(`${API_URL}/addproject`, project);
        console.log(`Added project: ${project.projectTitle}`);
      } catch (error) {
        console.error(`Error adding project ${project.projectTitle}:`, error.response?.data || error.message);
      }
    }

    console.log('Projects update completed!');
  } catch (error) {
    console.error('Error updating projects:', error.response?.data || error.message);
  }
}

// Function to update education/experience
async function updateEducation() {
  try {
    console.log('Updating education data...');

    // Add education entries
    for (const education of educationData) {
      try {
        const response = await axios.post(`${API_URL}/addexperience`, education);
        console.log(`Added education: ${education.experienceTitle}`);
      } catch (error) {
        console.error(`Error adding education ${education.experienceTitle}:`, error.response?.data || error.message);
      }
    }

    console.log('Education update completed!');
  } catch (error) {
    console.error('Error updating education:', error.response?.data || error.message);
  }
}

// Function to update achievements
async function updateAchievements() {
  try {
    console.log('Updating achievements data...');

    // Add achievements
    for (const achievement of achievementsData) {
      try {
        const response = await axios.post(`${API_URL}/addhonorsexperience`, achievement);
        console.log(`Added achievement: ${achievement.honorsExperienceTitle}`);
      } catch (error) {
        console.error(`Error adding achievement ${achievement.honorsExperienceTitle}:`, error.response?.data || error.message);
      }
    }

    console.log('Achievements update completed!');
  } catch (error) {
    console.error('Error updating achievements:', error.response?.data || error.message);
  }
}

// Main function
async function main() {
  console.log('Starting data update for Darshan Chaudhari...');

  // Note: You'll need to authenticate as admin first
  console.log('Note: Make sure you are authenticated as admin before running this script');

  await updateSkills();
  await updateProjects();
  await updateEducation();
  await updateAchievements();

  console.log('Data update completed!');
}

// Export for use
module.exports = {
  skillsData,
  projectsData,
  educationData,
  achievementsData,
  updateSkills,
  updateProjects,
  updateEducation,
  updateAchievements
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
