# Configuration Guide

## EmailJS Setup

### Step 1: Create EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (e.g., "Gmail", "Outlook", "Custom SMTP")

### Step 2: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Create a new template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content

Example template:
```
Subject: New Message from {{name}}

From: {{email}}

Message:
{{message}}
```

### Step 3: Update Configuration
Update `src/js/contact-form.js` with your credentials:

```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // From Email Templates → API
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

### Step 4: Test the Form
Fill out the contact form on the website and submit to verify it works.

---

## Optional: Environment Variables (.env)

Create a `.env` file in the root directory (DO NOT commit this to git):

```
EMAILJS_PUBLIC_KEY=p2RIQ6jaXNpHSPGxR
EMAILJS_SERVICE_ID=service_kyrxrfi
EMAILJS_TEMPLATE_ID=template_gaijpr5
```

Then update `src/js/contact-form.js` to use environment variables:
```javascript
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);
```

Note: This requires a build step (like Vite or Webpack) to work properly.

---

## GitHub Pages Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Organize project structure"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages"
3. Set source to "Deploy from a branch"
4. Select "main" branch and "/" (root) folder
5. Save

Your site will be live at: `https://yourusername.github.io/aekbc/`

---

## Hosting Alternatives

- **Netlify**: Drag & drop deployment
- **Vercel**: Optimized for web projects
- **Firebase Hosting**: Google's solution
- **AWS S3 + CloudFront**: Scalable solution

---

## Security Checklist

- [ ] Update church contact information
- [ ] Configure EmailJS credentials
- [ ] Update social media links
- [ ] Set up Google Analytics (optional)
- [ ] Enable HTTPS for production
- [ ] Test all forms and links
- [ ] Test on mobile devices
- [ ] Accessibility review
