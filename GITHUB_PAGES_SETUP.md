# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Instructions to Publish Your Portfolio

---

## ✅ Prerequisites

Before you start, make sure you have:
- [ ] A GitHub account (free at github.com)
- [ ] Git installed on your computer
- [ ] All portfolio files ready:
  - `index.html`
  - `Darshil_Shah_QA_Engineering_Portfolio.pdf`
  - Other files

---

## 📋 Step 1: Create a GitHub Repository

### Method A: Via GitHub Website (Easiest)

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in top right → Select **"New repository"**
3. **Fill in the details:**
   - **Repository name**: `darshil-portfolio` or `portfolio` (or any name you like)
   - **Description** (optional): "Professional QA Engineering Portfolio"
   - **Public**: ✅ Select this (required for free GitHub Pages)
   - **Initialize repository**: ☐ DO NOT check "Add a README" or gitignore

4. **Click "Create repository"**

---

## 📋 Step 2: Upload Files to GitHub

### Method A: Via GitHub Website (No Git Required)

1. **Go to your new repository**
2. **Click "Add file" → "Upload files"**
3. **Drag and drop your portfolio files:**
   - `index.html`
   - `Darshil_Shah_QA_Engineering_Portfolio.pdf`
   - `portfolio-website.jsx` (optional)
   - `README.md`

4. **Click "Commit changes"** (leave message as default or customize)
5. **Done!** Files are now on GitHub

---

### Method B: Via Git Command Line (More Control)

**Step 1: Open Terminal/Command Prompt**

**Step 2: Clone your repository**
```bash
git clone https://github.com/YOUR-USERNAME/darshil-portfolio.git
cd darshil-portfolio
```
Replace `YOUR-USERNAME` with your actual GitHub username

**Step 3: Copy files into the folder**
- Copy `index.html` into the folder
- Copy `Darshil_Shah_QA_Engineering_Portfolio.pdf` into the folder
- Copy other files (optional)

**Step 4: Add, commit, and push files**
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

---

## 📋 Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top right)
3. **Click "Pages"** in left sidebar (under "Code and automation")
4. **Under "Build and deployment":**
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"main"** and folder **"/ (root)"**
   - **Click "Save"**

5. **GitHub will display:**
   ```
   Your site is live at: https://YOUR-USERNAME.github.io/darshil-portfolio/
   ```

---

## 🎉 Step 4: Access Your Live Portfolio

**Your portfolio is now live at:**
```
https://YOUR-USERNAME.github.io/darshil-portfolio/
```

**Replace:**
- `YOUR-USERNAME` with your actual GitHub username
- `darshil-portfolio` with your repository name (if different)

---

## 📱 Test Your Website

1. **Open the URL** in a web browser
2. **Check all sections** work:
   - ✅ Home page loads
   - ✅ Navigation buttons work
   - ✅ Projects section displays
   - ✅ Skills section shows
   - ✅ Contact information visible
   - ✅ PDF download works
   - ✅ Social links work

3. **Test on mobile** by opening URL on your phone

---

## 🔗 Share Your Portfolio Link

### Shorten your URL (optional):
Use a URL shortener to make it easier to share:
- **Bit.ly**: https://bitly.com
- **TinyURL**: https://tinyurl.com
- **GitHub's short links**: github.com/YOUR-USERNAME

### Share in multiple places:
- **LinkedIn**: Add to your "Headline" or "About" section
- **Email signature**: Include full URL
- **Resume/CV**: Add as "Portfolio Website"
- **Job applications**: Include in cover letter
- **Social media**: Twitter, Instagram, etc.

**Example:**
```
Check out my QA Engineering portfolio: 
https://github.com/YOUR-USERNAME/darshil-portfolio
```

---

## 📝 Example URLs

**After deployment, your URLs will be:**

| File | URL |
|------|-----|
| Website | `https://YOUR-USERNAME.github.io/darshil-portfolio/` |
| Direct PDF | `https://YOUR-USERNAME.github.io/darshil-portfolio/Darshil_Shah_QA_Engineering_Portfolio.pdf` |
| GitHub Repo | `https://github.com/YOUR-USERNAME/darshil-portfolio` |

---

## 🔄 Updating Your Portfolio

Whenever you need to update your portfolio:

### Via GitHub Website:
1. Go to your repository
2. Click on the file to edit (e.g., `index.html`)
3. Click the pencil ✏️ icon
4. Make changes
5. Click "Commit changes"
6. GitHub Pages updates automatically (2-5 minutes)

### Via Git Command Line:
```bash
# Make changes to your files
# Then:
git add .
git commit -m "Update: Added new project"
git push origin main
```

---

## ✨ Advanced: Custom Domain (Optional)

If you own a domain (e.g., `darshilshah.com`):

1. **Go to Settings → Pages**
2. **Under "Custom domain":** Enter `yourdomain.com`
3. **Update your domain's DNS settings** to point to GitHub Pages
4. **GitHub will provide instructions**

---

## 🐛 Troubleshooting

### "Page not found" (404 error)?
- ✅ Check URL is correct: `https://USERNAME.github.io/darshil-portfolio/`
- ✅ Wait 2-5 minutes (GitHub Pages needs time to build)
- ✅ Make sure repository is PUBLIC
- ✅ Refresh the page (Ctrl+Shift+R)

### PDF not downloading?
- ✅ Make sure PDF is in the same folder as `index.html`
- ✅ Check the HTML download link has correct filename
- ✅ Verify PDF uploaded successfully to GitHub

### Styles look broken?
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Try different browser
- ✅ Check all CSS is inline in HTML (it is)

### Changes not showing?
- ✅ Wait 2-5 minutes for GitHub Pages to rebuild
- ✅ Hard refresh page (Ctrl+Shift+R)
- ✅ Check "Actions" tab in GitHub to see build status

---

## 📊 GitHub Pages Features

✅ **Free hosting** - No monthly fees
✅ **Custom domain** - Add your own domain
✅ **SSL/HTTPS** - Secure by default
✅ **Unlimited bandwidth** - No data limits
✅ **Easy updates** - Edit files directly on GitHub
✅ **Version control** - Track all changes
✅ **Public repository** - Great for portfolio visibility

---

## 🔐 Privacy & Security

**Your portfolio is PUBLIC** - Anyone can see:
- Your code (HTML/CSS/JavaScript)
- Your resume content
- Your contact information

**This is GOOD for:**
- ✅ Showing your work to employers
- ✅ Building your professional reputation
- ✅ SEO and discoverability
- ✅ Portfolio visibility

**What's NOT exposed:**
- ✅ Your password
- ✅ Email (not scraped)
- ✅ Private information
- ✅ Any sensitive data

---

## 📈 Monitor Your Portfolio

**Check GitHub Pages build status:**
1. Go to your repository
2. Click "Actions" tab
3. See deployment history and status

**Google Analytics (Optional):**
1. Add Google Analytics code to `index.html`
2. Track visitor metrics
3. See which sections are popular

---

## 🎯 Next Steps

1. ✅ Create GitHub repository
2. ✅ Upload portfolio files
3. ✅ Enable GitHub Pages
4. ✅ Test your live URL
5. ✅ Share portfolio link
6. ✅ Add to LinkedIn profile
7. ✅ Include in job applications
8. ✅ Monitor and update regularly

---

## 📞 Quick Reference

**Your GitHub Pages URL:**
```
https://YOUR-USERNAME.github.io/darshil-portfolio/
```

**Repository location:**
```
https://github.com/YOUR-USERNAME/darshil-portfolio
```

**Settings page:**
```
https://github.com/YOUR-USERNAME/darshil-portfolio/settings/pages
```

**PDF direct link:**
```
https://YOUR-USERNAME.github.io/darshil-portfolio/Darshil_Shah_QA_Engineering_Portfolio.pdf
```

---

## 🚀 Deployment Checklist

Before going live, verify:
- [ ] All files uploaded to GitHub
- [ ] Repository is PUBLIC
- [ ] GitHub Pages enabled in Settings
- [ ] Build successful (check Actions tab)
- [ ] Website loads in browser
- [ ] All links work
- [ ] PDF downloads
- [ ] Mobile responsive
- [ ] Social links functional
- [ ] Contact info visible

---

## 💡 Pro Tips

1. **Add social preview image**: Create a banner image and add to repository
2. **Write a good README**: Visitors see it on GitHub repo
3. **Add topics**: Help others discover your portfolio (AI, QA, Healthcare, etc.)
4. **Enable "About" section**: Add description and link
5. **Star your own repo**: Shows it's important to you
6. **Share on social media**: LinkedIn, Twitter, etc.

---

## 📚 Additional Resources

- **GitHub Pages Documentation**: https://pages.github.com
- **GitHub Quick Start**: https://docs.github.com/en/get-started
- **Git Commands Cheat Sheet**: https://git-scm.com/docs

---

## ✅ Success! 

Your portfolio is now published on GitHub Pages! 🎉

**Share your live portfolio URL:**
```
https://YOUR-USERNAME.github.io/darshil-portfolio/
```

**Good luck with your QA engineering career!**

---

**Last Updated**: March 2026
**Status**: Ready to Deploy ✅
