# Darshan Chaudhari Portfolio Data Update

This guide explains how to update the portfolio data with Darshan's information from his resume.

## What's Been Updated

### 1. Personal Information
- ✅ Name changed from "Kartavya Singh" to "Darshan Chaudhari"
- ✅ Profile description updated to match resume
- ✅ Meta tags and titles updated
- ✅ Image references updated (you'll need to replace actual image files)

### 2. Skills Data Structure Created
Based on your resume, I've created the following skill categories:

- **Programming Languages**: Python, JavaScript, Dart, HTML, CSS
- **Frameworks & Technologies**: Flutter, Firebase, MERN Stack
- **Development Tools**: Git, GitHub, VS Code, Android Studio, Postman, Figma, Canva
- **AI & Machine Learning**: AI/ML, GANs
- **Platforms & Domains**: Web Development, Mobile Development, API Integration, UI/UX Design

### 3. Projects Data Created
- **CompuStock - Smart Rideshare Ride-Sharing Platform** (Jan 2025 - Present)
- **AI-Powered Public Transport Ticketing App** (Jul 2024 - Sep 2024)

### 4. Education & Achievements
- B.Tech Electronics and Computer Science education entry
- Achievement entries for CompuStock impact and user recognition

## How to Update the Database

### Step 1: Install Dependencies
```bash
npm install axios
```

### Step 2: Make Sure Backend is Running
Ensure your backend server is running on `http://localhost:5000`

### Step 3: Admin Authentication
You'll need to authenticate as admin first through the admin console in your portfolio.

### Step 4: Run the Update Script
```bash
node update_darshan_data.js
```

## Manual Updates Needed

### 1. Replace Image Files
You need to replace these image files with your actual photos:
- `frontend/public/Darshan.webp` (your main profile photo)
- `frontend/public/Darshan-Profile-Photo.webp` (your about page photo)
- `frontend/src/assets/Darshan_Chaudhari_Resume2025.pdf` (your actual resume)

### 2. Update Contact Information
Update any contact information, social media links, or personal details in:
- Email addresses
- Phone numbers
- Social media profiles
- GitHub username (already updated to darshanc4696)

### 3. Customize Statistics
Update the about page statistics in `frontend/src/components/AboutPage/AboutPage.js` if needed.

## File Changes Made

### Frontend Files Updated:
- `frontend/src/components/AboutPage/AboutPage.js`
- `frontend/src/components/HomePage/HomePage.js`
- `frontend/src/components/SpecialComponents/NavBar.js`
- `frontend/src/components/SpecialComponents/AdminConsole.js`
- `frontend/src/components/SkillPage/SkillPage.js`
- `frontend/public/index.html`

### New Files Created:
- `update_darshan_data.js` - Script to update database with your information
- `README_DATA_UPDATE.md` - This instruction file

## Next Steps

1. Replace the image files with your actual photos
2. Run the data update script to populate the database
3. Test the portfolio to ensure everything works correctly
4. Customize any additional personal information as needed

## Notes

- The script includes proper error handling
- All data is structured according to your resume
- Skills are categorized by proficiency levels (proficient, intermediate, beginner)
- Projects include detailed descriptions and tech stacks
- Education and achievements are properly formatted

If you encounter any issues, check the console logs for detailed error messages.
