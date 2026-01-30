# 🚀 Deployment Guide - Brew Haven Website

Your Brew Haven coffee shop website is production-ready and can be deployed to the web with just a few steps!

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All 5 pages load correctly in your browser
- [ ] Mobile menu works on mobile devices
- [ ] Contact form displays properly
- [ ] All images are in place (or placeholder colors work)
- [ ] Links navigate correctly
- [ ] No console errors (F12 → Console)
- [ ] Responsive design works (F12 → Toggle device)

## 🎯 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Pros:** Free, automatic deployments, SSL included, easy custom domain
**Time:** 2-3 minutes

**Steps:**
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub/Google (or email)
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `coffee-website` folder
5. Done! Your site is live!

**Custom Domain:**
1. Go to Site settings
2. Domain management
3. Add custom domain
4. Follow DNS instructions

---

### Option 2: GitHub Pages (Free & Professional)

**Pros:** Free, tied to GitHub, automatic HTTPS
**Time:** 5-10 minutes

**Steps:**
1. Create a GitHub account at [github.com](https://github.com)
2. Create new repository named `coffee-website`
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "main" branch as source
6. Click Save
7. Your site is live at `username.github.io/coffee-website`

**With Custom Domain:**
1. Buy domain from GoDaddy, Namecheap, etc.
2. Point DNS to GitHub's nameservers
3. Add domain in GitHub Pages settings
4. Enable HTTPS (automatic)

---

### Option 3: Traditional Web Hosting (Shared Hosting)

**Pros:** Reliable, good support, affordable
**Cost:** $2-10/month
**Time:** 10-15 minutes

**Popular Hosts:**
- Bluehost
- HostGator
- SiteGround
- DreamHost
- 1&1 Ionos

**Steps:**
1. Purchase hosting plan
2. Get FTP credentials
3. Download FileZilla (FTP client)
4. Connect to server using FTP credentials
5. Upload all project files to `public_html` folder
6. Visit your domain - done!

---

### Option 4: Vercel (Advanced - Recommended for Developers)

**Pros:** Built for modern web, fast, free tier available
**Time:** 5 minutes

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Select your coffee-website repository
5. Click "Deploy"
6. Your site is live!

---

### Option 5: AWS S3 + CloudFront (Enterprise)

**Pros:** Scalable, very fast, professional
**Cost:** ~$1-5/month
**Time:** 20-30 minutes

**Setup:**
1. Create AWS account
2. Create S3 bucket
3. Upload files to bucket
4. Enable static website hosting
5. Create CloudFront distribution
6. Add custom domain via Route 53

---

## 📝 Before Going Live

### 1. **Update Business Information**

Edit these files with your actual information:

**All pages** - Footer and contact:
- Replace "Brew Haven" with your coffee shop name
- Update social media links in footer
- Update hours if different

**contact.html** - Specific changes needed:
- Address (line 201)
- Phone number (line 207)
- Email address (line 213)
- Business hours (lines 220-225)

### 2. **Add Real Images**

1. Create folder: `images/`
2. Add your coffee shop photos
3. Replace placeholder gradients with image paths

Example:
```html
<!-- OLD (placeholder) -->
<div class="bg-gradient-to-br from-amber-300 to-amber-600">
    <i class="fas fa-mug-hot"></i>
</div>

<!-- NEW (with image) -->
<img src="images/coffee-1.jpg" alt="Espresso">
```

### 3. **Customize Colors** (Optional)

If you want custom colors instead of the amber/brown theme:

Search and replace Tailwind classes:
- `amber-50` → `blue-50` (light)
- `amber-100` → `blue-100`
- `amber-800` → `blue-800` (dark)
- `amber-900` → `blue-900`

### 4. **Set Up Email Functionality** (Optional)

Contact form currently shows success message locally. To actually send emails:

**Option A: Use Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Copy your form endpoint
4. Update form action in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

**Option B: Use EmailJS**
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up and create service
3. Add to `js/script.js`:

```javascript
emailjs.send("service_id", "template_id", {
    from_name: form_data.name,
    from_email: form_data.email,
    message: form_data.message
});
```

**Option C: Use Your Backend**
- Set up Node.js/Python backend
- Configure form to POST to your endpoint
- Send email through your backend

### 5. **Test Everything**

Before deploying:

```
Test on Desktop:
[ ] All pages load
[ ] All links work
[ ] Images display
[ ] Animations smooth
[ ] Form submits
[ ] No console errors

Test on Mobile:
[ ] Menu toggles
[ ] Responsive layout
[ ] Touch buttons work
[ ] Form usable
[ ] Text readable
[ ] No layout issues

Test Different Browsers:
[ ] Chrome
[ ] Firefox
[ ] Safari
[ ] Edge
```

---

## 📊 SEO Optimization (Optional)

For better Google search results:

**1. Update Meta Tags in index.html:**
```html
<title>Brew Haven - Premium Coffee & Espresso</title>
<meta name="description" content="Discover premium specialty coffee at Brew Haven. Ethically sourced beans, expert baristas, cozy atmosphere.">
<meta name="keywords" content="coffee shop, espresso, cafe, specialty coffee">
```

**2. Add favicon:**
```html
<link rel="icon" href="images/coffee-icon.png" type="image/png">
```

**3. Add Schema markup (in HTML head):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CoffeeShop",
  "name": "Brew Haven",
  "address": "123 Coffee Street, San Francisco, CA 94102",
  "telephone": "(555) 123-4567"
}
</script>
```

---

## 🔧 Maintenance After Deploy

### Regular Tasks:
- [ ] Check for broken links monthly
- [ ] Update menu if prices change
- [ ] Add new photos to gallery
- [ ] Monitor form submissions
- [ ] Keep software updated

### Monthly Checklist:
- Run Google PageSpeed Insights
- Check for 404 errors
- Review contact form submissions
- Update social media links
- Test all forms

---

## 🆘 Troubleshooting

### Links Don't Work
- Check file names match exactly (case-sensitive on some servers)
- Use relative paths: `about.html` not `/about.html`

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file path in HTML
- Ensure `css/` folder exists

### JavaScript Not Working
- Check console for errors (F12)
- Verify `js/script.js` exists
- Ensure jQuery not required (using vanilla JS)

### Images Not Displaying
- Check image file paths
- Ensure images exist in `images/` folder
- Verify file extensions (.jpg, .png, etc.)
- Check file permissions (644 for files, 755 for folders)

### Form Not Submitting
- Check browser console for errors
- Verify all required fields filled
- If using Formspree, verify endpoint
- Check email setup

---

## 🌐 Domain Registration

**Where to buy domains:**
- GoDaddy.com (cheap, beginner-friendly)
- Namecheap.com (affordable, good support)
- Google Domains (integration with Google services)
- Route53 (if using AWS)

**Cost:** $10-15/year typically

**Steps:**
1. Search for available domain
2. Purchase domain
3. Get nameservers from your host
4. Update DNS in domain registrar
5. Wait 24-48 hours for propagation
6. Verify domain works

---

## 📈 After Launch

### Analytics Setup

Add Google Analytics:

```html
<!-- Add to <head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Social Media

Update footer social links with your accounts:
```html
<a href="https://facebook.com/brewhaven">
    <i class="fab fa-facebook"></i>
</a>
```

---

## ✨ Launch Checklist

Before announcing:

- [ ] Domain registered
- [ ] Website live and tested
- [ ] All links working
- [ ] Contact form working
- [ ] Social links updated
- [ ] Google Analytics setup
- [ ] Phone number correct
- [ ] Hours accurate
- [ ] Images uploaded
- [ ] SEO tags updated
- [ ] Google Search Console submitted
- [ ] Sitemap created (auto-generated by Netlify)

---

## 🎉 You're Live!

**Next Steps:**
1. Share with friends and family
2. Post on social media
3. Tell customers about your site
4. Get customer feedback
5. Update content regularly
6. Monitor analytics

---

## 📞 Support Resources

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **HTML/CSS:** [mdn.org](https://mdn.org)
- **JavaScript:** [javascript.info](https://javascript.info)

---

## 📝 Next Level Enhancements

Consider adding later:

- [ ] Blog section (coffee tips, recipes)
- [ ] Online ordering system
- [ ] Loyalty program
- [ ] Email newsletter signup
- [ ] Live chat support
- [ ] Photo gallery with lightbox
- [ ] Event calendar
- [ ] Staff bios/profiles
- [ ] Coffee bean sourcing info
- [ ] Coffee education resources

---

**Congratulations on your new website! ☕**

Your Brew Haven coffee shop website is ready to serve customers online!

For questions, refer to the README.md or QUICK_START.md files.

---

*Last Updated: January 30, 2026*
*Status: Production Ready ✅*
