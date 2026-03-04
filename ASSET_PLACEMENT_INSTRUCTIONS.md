# 📁 Asset Placement Instructions for Portfolio Projects

This guide shows you exactly where to place your images, videos, and code snippets to replace all the placeholders in your portfolio project pages.

---

## 📂 Folder Structure Setup

First, create the necessary folders in your project directory:

```
Professional Website/
└── assets/
    ├── images/
    │   └── projects/          ← CREATE THIS FOLDER
    └── videos/                ← CREATE THIS FOLDER (if it doesn't exist)
```

**Steps:**
1. Navigate to `assets/images/`
2. Create a new folder named `projects`
3. Navigate to `assets/` 
4. Create a new folder named `videos` (if not already present)

---

## 🚀 Project 1: SuperMango (AI Mango Disease Classifier)

**File:** `project-supermango.html`

### 📷 Images Needed (in `assets/images/projects/`)

| Placeholder Filename | What to Add | Recommended Size |
|---------------------|-------------|------------------|
| `supermango-logo.png` | Your app logo or icon | 200x200px or 300x300px |
| `supermango-screen1.png` | Home/Main screen mockup | 375x812px (mobile) |
| `supermango-screen2.png` | Camera/Upload screen | 375x812px (mobile) |
| `supermango-screen3.png` | Results/Analysis screen | 375x812px (mobile) |
| `supermango-screen4.png` | History/Saved results screen | 375x812px (mobile) |

### 🎥 Video Needed (in `assets/videos/`)

| Placeholder Filename | What to Add | Format |
|---------------------|-------------|--------|
| `supermango-demo.mp4` | App walkthrough video showing the full user flow | MP4, 720p-1080p |
| `supermango-video-poster.jpg` | Video thumbnail/poster image | 1280x720px (JPG) |

### 💡 Instructions:
1. Place all 5 images in `assets/images/projects/`
2. Place the video and poster in `assets/videos/`
3. The HTML is already configured - just drop in the files!

---

## 🎯 Project 2: Boost (Career Roadmap Generator)

**File:** `project-boost.html`

### 📷 Images Needed (in `assets/images/projects/`)

| Placeholder Filename | What to Add | Recommended Size |
|---------------------|-------------|------------------|
| `boost-logo.png` | Your app logo or icon | 200x200px or 300x300px |
| `boost-screen1.png` | Onboarding/Welcome screen | 375x812px (mobile) |
| `boost-screen2.png` | Input/Survey screen | 375x812px (mobile) |
| `boost-screen3.png` | Roadmap generation screen | 375x812px (mobile) |
| `boost-screen4.png` | Full roadmap display | 375x812px (mobile) |

### 🎥 Video Needed (in `assets/videos/`)

| Placeholder Filename | What to Add | Format |
|---------------------|-------------|--------|
| `boost-demo.mp4` | App demo showing career roadmap generation | MP4, 720p-1080p |
| `boost-video-poster.jpg` | Video thumbnail/poster image | 1280x720px (JPG) |

### 💡 Instructions:
1. Place all 5 images in `assets/images/projects/`
2. Place the video and poster in `assets/videos/`
3. Files are ready to display once added!

---

## 🔢 Project 3: Length Conversion Calculator

**File:** `project-length-calculator.html`

### 📷 Images Needed (in `assets/images/projects/`)

| Placeholder Filename | What to Add | Recommended Size |
|---------------------|-------------|------------------|
| `length-calc-screenshot1.png` | Main calculator interface | 1920x1080px (desktop) |
| `length-calc-screenshot2.png` | Conversion results view | 1920x1080px (desktop) |

### 🎥 Video Needed (in `assets/videos/`)

| Placeholder Filename | What to Add | Format |
|---------------------|-------------|--------|
| `length-calc-demo.mp4` | Web app demo showing conversions | MP4, 720p-1080p |
| `length-calc-video-poster.jpg` | Video thumbnail/poster image | 1280x720px (JPG) |

### 💻 Code Snippet Replacement

**Location in HTML:** Look for this section around line 140-180:
```html
<div class="code-section">
    <h3>Code Snippet - Conversion Logic</h3>
    <p>Here's the PHP code that handles unit conversion:</p>
    <pre><code class="language-php">
# REPLACE THIS WITH YOUR ACTUAL PHP CODE
```

**What to Replace:**
1. Find the comment `# REPLACE THIS WITH YOUR ACTUAL PHP CODE`
2. Delete the example PHP code below it
3. Paste your **actual PHP conversion function** from your project
4. Keep the opening `<pre><code class="language-php">` and closing `</code></pre>` tags intact

**Example of what your final code should look like:**
```html
<pre><code class="language-php">
<?php
function convertLength($value, $from, $to) {
    // YOUR ACTUAL CODE HERE
    $meters = convertToMeters($value, $from);
    return convertFromMeters($meters, $to);
}
?>
</code></pre>
```

### 💡 Instructions:
1. Place 2 screenshots in `assets/images/projects/`
2. Place video and poster in `assets/videos/`
3. Open `project-length-calculator.html` in a text editor
4. Replace the PHP code snippet as described above
5. Save the file

---

## 🌤️ Project 4: Live Weather Forecast

**File:** `project-weather-forecast.html`

### 📷 Images Needed (in `assets/images/projects/`)

| Placeholder Filename | What to Add | Recommended Size |
|---------------------|-------------|------------------|
| `weather-app-screenshot1.png` | Main weather interface with data | 1920x1080px (desktop) |
| `weather-app-screenshot2.png` | 5-day forecast view | 1920x1080px (desktop) |

### 🎥 Video Needed (in `assets/videos/`)

| Placeholder Filename | What to Add | Format |
|---------------------|-------------|--------|
| `weather-app-demo.mp4` | App demo showing city search and weather display | MP4, 720p-1080p |
| `weather-app-video-poster.jpg` | Video thumbnail/poster image | 1280x720px (JPG) |

### 💻 Code Snippet Replacement

**Location in HTML:** Look for this section around line 230-270:
```html
<div class="code-section">
    <h3>Code Snippet - API Integration</h3>
    <p>Here's the core Python code that fetches weather data from the API:</p>
    <pre><code class="language-python">
# REPLACE THIS WITH YOUR ACTUAL PYTHON CODE
```

**What to Replace:**
1. Find the comment `# REPLACE THIS WITH YOUR ACTUAL PYTHON CODE`
2. Delete the example Python code below it
3. Paste your **actual Python weather fetching function** from your project
4. Keep the opening `<pre><code class="language-python">` and closing `</code></pre>` tags intact

**Example of what your final code should look like:**
```html
<pre><code class="language-python">
import requests
from tkinter import messagebox

def get_weather(city):
    # YOUR ACTUAL CODE HERE
    api_key = "your_key_here"
    response = requests.get(url, params=params)
    return response.json()
</code></pre>
```

### 💡 Instructions:
1. Place 2 screenshots in `assets/images/projects/`
2. Place video and poster in `assets/videos/`
3. Open `project-weather-forecast.html` in a text editor
4. Replace the Python code snippet as described above
5. Save the file

---

## 📋 Quick Checklist

Use this checklist to track your progress:

### Project 1: SuperMango
- [ ] `supermango-logo.png` → `assets/images/projects/`
- [ ] `supermango-screen1.png` → `assets/images/projects/`
- [ ] `supermango-screen2.png` → `assets/images/projects/`
- [ ] `supermango-screen3.png` → `assets/images/projects/`
- [ ] `supermango-screen4.png` → `assets/images/projects/`
- [ ] `supermango-demo.mp4` → `assets/videos/`
- [ ] `supermango-video-poster.jpg` → `assets/videos/`

### Project 2: Boost
- [ ] `boost-logo.png` → `assets/images/projects/`
- [ ] `boost-screen1.png` → `assets/images/projects/`
- [ ] `boost-screen2.png` → `assets/images/projects/`
- [ ] `boost-screen3.png` → `assets/images/projects/`
- [ ] `boost-screen4.png` → `assets/images/projects/`
- [ ] `boost-demo.mp4` → `assets/videos/`
- [ ] `boost-video-poster.jpg` → `assets/videos/`

### Project 3: Length Conversion Calculator
- [ ] `length-calc-screenshot1.png` → `assets/images/projects/`
- [ ] `length-calc-screenshot2.png` → `assets/images/projects/`
- [ ] `length-calc-demo.mp4` → `assets/videos/`
- [ ] `length-calc-video-poster.jpg` → `assets/videos/`
- [ ] Replace PHP code snippet in `project-elearning.html`

### Project 4: Live Weather Forecast
- [ ] `weather-app-screenshot1.png` → `assets/images/projects/`
- [ ] `weather-app-screenshot2.png` → `assets/images/projects/`
- [ ] `weather-app-demo.mp4` → `assets/videos/`
- [ ] `weather-app-video-poster.jpg` → `assets/videos/`
- [ ] Replace Python code snippet in `project-task-manager.html`

---

## 🎨 Image Guidelines

### Mobile Screenshots (SuperMango, Boost)
- **Format:** PNG with transparent background (preferred) or solid background
- **Size:** 375x812px (iPhone X/11 dimensions) or 360x800px (Android)
- **Quality:** High resolution, clear UI elements
- **Tip:** Use mockup tools like Figma, MockUPhone, or Smartmockups

### Desktop Screenshots (Calculator, Weather)
- **Format:** PNG or JPG
- **Size:** 1920x1080px (Full HD) or 1280x720px (HD)
- **Quality:** High resolution, readable text
- **Tip:** Take full-window screenshots with clean backgrounds

### Logo/Icons
- **Format:** PNG with transparent background
- **Size:** 200x200px minimum, 512x512px maximum
- **Quality:** Vector-like quality (sharp edges)

### Video Posters
- **Format:** JPG
- **Size:** 1280x720px (16:9 aspect ratio)
- **Tip:** Use a representative frame from your video

---

## 🎥 Video Guidelines

### Requirements
- **Format:** MP4 (H.264 codec)
- **Resolution:** 720p (1280x720) minimum, 1080p (1920x1080) recommended
- **Duration:** 30 seconds to 3 minutes (keep it concise!)
- **File Size:** Under 50MB (compress if needed)

### Content Suggestions
1. **Mobile Apps (SuperMango, Boost):**
   - Screen recording from emulator or physical device
   - Show full user flow: launch → main feature → results
   - Highlight key interactions and animations

2. **Desktop Apps (Calculator, Weather):**
   - Screen recording with smooth mouse movements
   - Demonstrate core functionality
   - Show input → process → output flow

### Tools for Video Creation
- **Screen Recording:** OBS Studio, ShareX, QuickTime (Mac), Windows Game Bar
- **Compression:** HandBrake, FFmpeg, CloudConvert
- **Editing:** DaVinci Resolve (free), Shotcut, Clipchamp

---

## 🔧 Code Snippet Guidelines

### For PHP (Length Calculator)
1. Open `project-elearning.html` in VS Code or any text editor
2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac) and search for: `REPLACE THIS WITH YOUR ACTUAL PHP CODE`
3. Select and delete the example code (keep the `<pre><code>` tags)
4. Paste your actual conversion function
5. Ensure proper indentation for readability
6. Include comments explaining key logic

### For Python (Weather App)
1. Open `project-task-manager.html` in VS Code or any text editor
2. Press `Ctrl+F` and search for: `REPLACE THIS WITH YOUR ACTUAL PYTHON CODE`
3. Select and delete the example code (keep the `<pre><code>` tags)
4. Paste your actual API function
5. Remove or replace sensitive API keys with `"YOUR_API_KEY_HERE"`
6. Keep it to 20-40 lines (the most important logic)

---

## ⚠️ Important Notes

### Don't Have Assets Yet?
- **Temporary:** The placeholders will show broken image icons - this is normal
- **Screenshots:** Take them from your running applications
- **Videos:** Record short demos (30-60 seconds is perfect)
- **Code:** Copy the most relevant functions from your source files

### File Naming is Critical!
- Use the **exact filenames** listed in this guide
- Filenames are **case-sensitive** on some systems
- Use lowercase letters and hyphens (no spaces)

### Testing
After adding your assets:
1. Open each project page in a web browser
2. Check that all images load correctly
3. Play the videos to ensure they work
4. Verify code snippets display properly

---

## 🆘 Troubleshooting

### Images Not Showing?
✅ **Check:** File is in correct folder (`assets/images/projects/`)  
✅ **Check:** Filename matches exactly (including extension)  
✅ **Check:** File extension is lowercase (.png, not .PNG)  

### Videos Not Playing?
✅ **Check:** File is in correct folder (`assets/videos/`)  
✅ **Check:** Video format is MP4 (H.264 codec)  
✅ **Check:** File size is under 100MB  
✅ **Try:** Convert video using HandBrake or online converter  

### Code Not Displaying Well?
✅ **Check:** You kept the `<pre><code>` tags intact  
✅ **Check:** Code doesn't have HTML-breaking characters like `<`, `>` (should be `&lt;`, `&gt;`)  
✅ **Try:** Use an HTML encoder for special characters  

---

## ✅ Final Steps

Once you've placed all assets:

1. **Open your website** in a browser (Chrome, Firefox, Edge)
2. **Navigate to Portfolio** from the main menu
3. **Click on each project** to view them
4. **Verify everything displays** correctly
5. **Share your portfolio** with confidence! 🎉

---

## 📞 Need Help?

If you encounter any issues:
1. Double-check the filename and folder location
2. Make sure file extensions match (.png, .jpg, .mp4)
3. Try refreshing the page with `Ctrl+F5` (hard refresh)
4. Check the browser console for error messages (F12 → Console tab)

---

**Good luck with your portfolio! 🚀**

