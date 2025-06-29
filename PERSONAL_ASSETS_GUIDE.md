# Personal Assets Update Guide

This guide explains how to replace the person images and resume in your portfolio.

## 📸 Images to Replace

### 1. Main Profile Picture (Homepage)
- **File Location:** `frontend/public/Darshan.webp`
- **Current Usage:** Main profile picture displayed on the homepage
- **Recommended Specs:**
  - Format: WebP (preferred), JPG, or PNG
  - Size: 250x250 pixels (square)
  - High quality, professional headshot
  - Good lighting and clear background

### 2. About Page Profile Picture  
- **File Location:** `frontend/public/Darshan-Profile-Photo.webp`
- **Current Usage:** Profile picture displayed on the About page
- **Recommended Specs:**
  - Format: WebP (preferred), JPG, or PNG
  - Size: 300x300 pixels (square)
  - Professional photo, can be different from homepage
  - Should complement the about section content

## 📄 Resume to Replace

### Resume File
- **File Location:** `frontend/src/assets/Darshan_Chaudhari_Resume2025.pdf`
- **Current Usage:** Downloaded when users click "Resume" button in navbar or about page
- **Recommended Specs:**
  - Format: PDF only
  - File size: Under 5MB
  - Professional formatting
  - Up-to-date information

## 🔧 How to Update (Easy Method)

### Step 1: Prepare Your Files
1. Get your professional photos ready
2. Ensure they meet the recommended specs above
3. Have your updated resume in PDF format

### Step 2: Replace Files Directly
1. **Replace Main Profile Picture:**
   ```
   Navigate to: d:\djc portfolio\frontend\public\
   Replace: Darshan.webp with your photo
   Keep the filename: Darshan.webp
   ```

2. **Replace About Page Picture:**
   ```
   Navigate to: d:\djc portfolio\frontend\public\
   Replace: Darshan-Profile-Photo.webp with your photo  
   Keep the filename: Darshan-Profile-Photo.webp
   ```

3. **Replace Resume:**
   ```
   Navigate to: d:\djc portfolio\frontend\src\assets\
   Replace: Darshan_Chaudhari_Resume2025.pdf with your resume
   Keep the filename: Darshan_Chaudhari_Resume2025.pdf
   ```

### Step 3: Restart Frontend
```bash
# Stop the current frontend server (Ctrl+C)
# Then restart it
cd frontend
npm start
```

## 🛠️ Advanced Method (Custom Filenames)

If you want to use different filenames, you'll need to update the code references:

### Files to Update:
1. `frontend/src/components/HomePage/HomePage.js` (line 238)
2. `frontend/src/components/AboutPage/AboutPage.js` (line 78)
3. `frontend/src/components/SpecialComponents/NavBar.js` (line 368)

### Example Code Changes:
```javascript
// In HomePage.js - change this line:
src={`${process.env.PUBLIC_URL}/Darshan.webp`}
// To your filename:
src={`${process.env.PUBLIC_URL}/YourName.webp`}

// In AboutPage.js - change this line:
src={`${process.env.PUBLIC_URL}/Darshan-Profile-Photo.webp`}
// To your filename:
src={`${process.env.PUBLIC_URL}/YourName-Profile-Photo.webp`}
```

## 🌐 Helpful Online Tools

### Image Conversion & Optimization:
- **Convert to WebP:** https://convertio.co/jpg-webp/
- **Resize Images:** https://www.iloveimg.com/resize-image
- **Compress Images:** https://tinypng.com/

### Resume Optimization:
- **Compress PDF:** https://www.ilovepdf.com/compress_pdf
- **PDF to WebP (if needed):** https://convertio.co/pdf-webp/

## 💡 Pro Tips

1. **Image Quality:** Use high-resolution photos that look professional
2. **Consistency:** Keep a consistent style between homepage and about page photos
3. **File Size:** Optimize images to keep file sizes reasonable (under 1MB each)
4. **Backup:** Keep copies of original files before replacing
5. **Testing:** Always test the portfolio after making changes

## 🚨 Troubleshooting

### Images Not Showing:
- Check file paths are correct
- Ensure filenames match exactly (case-sensitive)
- Clear browser cache (Ctrl+F5)
- Check browser console for errors

### Resume Not Downloading:
- Verify PDF file is in correct location
- Check file permissions
- Ensure filename matches code references

## 📞 Need Help?

If you need assistance with:
- Updating code references for custom filenames
- Troubleshooting display issues
- Optimizing image formats

Just let me know and I can help you make the specific changes!
