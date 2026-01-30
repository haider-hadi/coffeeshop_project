# ☕ Brew Haven - Coffee Shop Website

A modern, responsive front-end website for a premium coffee shop built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**.

## 📋 Project Overview

**Brew Haven** is a professional, fully responsive website designed for a modern coffee shop. The site features a clean and elegant coffee-themed design with smooth animations and intuitive navigation.

### Key Features
✅ **5 Fully Functional Pages**
- Home (Hero section, Featured products, Reviews, Footer)
- About Us (Story, Mission, Vision, Team)
- Menu (12 Coffee items with hover effects)
- Gallery (9-item image grid with zoom animations)
- Contact (Contact form, Map embed, Business hours)

✅ **Responsive Design**
- Mobile-first approach
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly navigation

✅ **Modern Aesthetics**
- Coffee-themed color palette (Browns, Beige, White)
- Smooth animations and transitions
- Professional typography
- Icon library (Font Awesome)

✅ **Interactive Elements**
- Mobile menu toggle
- Contact form with validation
- Gallery hover effects
- Scroll-to-top button
- Active link highlighting
- Smooth scrolling

✅ **Accessibility**
- Semantic HTML5
- WCAG compliant
- Keyboard navigation support
- Focus indicators

## 📁 Folder Structure

```
coffee-website/
│
├── index.html              # Home page
├── about.html              # About Us page
├── menu.html               # Menu page with 12 coffee items
├── gallery.html            # Gallery page with image grid
├── contact.html            # Contact page with form & map
│
├── css/
│   └── style.css           # Custom animations and styles
│
├── js/
│   └── script.js           # Interactive features
│
├── images/                 # Image placeholder folder
│   └── (add your images here)
│
└── README.md               # This file
```

## 🎨 Design Details

### Color Scheme
- **Primary**: Amber/Brown (#d97706, #92400e)
- **Secondary**: Beige (#faf5f0)
- **Text**: Dark Brown (#5d4037)
- **Accents**: Gold, White

### Typography
- **Font**: Segoe UI, Sans-serif
- **Headings**: Bold, 700 weight
- **Body**: Regular, 400 weight

### Animations
- Fade-in effects
- Slide transitions
- Scale transformations
- Hover effects
- Bounce animations
- Smooth scrolling

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- No server required!

### Installation

1. **Clone or download** the project folder
2. **Open `index.html`** in your web browser
3. That's it! The website is ready to use

### Local Development
For best experience during development:
- Use VS Code with Live Server extension
- Or use Python's simple server:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`

## 📄 Pages & Components

### 1. **Home (index.html)**
- Navigation bar with responsive menu
- Hero section with CTA button
- 3 Featured product cards
- Customer reviews section
- Footer with social links

### 2. **About Us (about.html)**
- Coffee shop story and journey
- Mission & Vision statements
- Why Choose Us section
- Team members profiles

### 3. **Menu (menu.html)**
- 12 Coffee items organized in sections
- Espresso-based drinks (6 items)
- Specialty drinks (6 items)
- Price, description, and attributes
- Hover effect animations

### 4. **Gallery (gallery.html)**
- 9-item responsive image grid
- Zoom effect on hover
- Image descriptions
- Features section

### 5. **Contact (contact.html)**
- Contact form (Name, Email, Subject, Message)
- Contact information cards
- Business hours display
- Google Maps embed
- Newsletter subscription

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks or libraries
- **Font Awesome** - Icon library
- **Google Maps API** - Embedded map

## 🎯 Features Breakdown

### JavaScript Features
✅ Mobile menu toggle
✅ Contact form validation
✅ Smooth scrolling
✅ Active link highlighting
✅ Scroll-to-top button
✅ Gallery hover effects
✅ Intersection Observer for animations
✅ Keyboard navigation support
✅ Performance optimizations

### CSS Features
✅ Custom animations (fadeIn, slideIn, scaleUp, bounce, pulse)
✅ Responsive design with media queries
✅ Accessibility support (focus indicators)
✅ Smooth transitions
✅ Custom scrollbar styling
✅ Print styles

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎓 How to Customize

### Change Colors
Edit Tailwind classes in HTML files (search for `amber-` classes):
```html
<!-- Change from amber-800 to blue-800, for example -->
<div class="bg-amber-800">Coffee</div>
```

### Add More Menu Items
Copy a menu item card in `menu.html` and update:
- Title, price, description
- Icon/color

### Update Business Information
Edit contact details in all files:
- Address, phone, email, hours in `contact.html`
- Footer information (same across all pages)

### Add Images
1. Add image files to the `images/` folder
2. Replace placeholder colors with actual image paths

### Modify Animations
Edit `css/style.css` to customize animation timings and effects

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Lightweight**: ~50KB total (HTML + CSS + JS)
- **Fast Loading**: No external dependencies except CDNs
- **Optimized**: Efficient CSS and JavaScript
- **Mobile Friendly**: Optimized for all devices

## 🔒 Security Notes

- No backend required
- All form data is processed client-side
- To send emails, you'll need to integrate a service like:
  - Formspree
  - EmailJS
  - AWS SES
  - Your own backend

## 🤝 Contributing

This is a static website. To improve it:
1. Modify HTML files for content
2. Edit `css/style.css` for styling
3. Update `js/script.js` for functionality

## 📝 License

Free to use for personal and commercial projects.

## 🎉 Credits

- **Design**: Brew Haven Team
- **Icons**: Font Awesome
- **CSS Framework**: Tailwind CSS
- **Maps**: Google Maps API

## 📞 Support & Customization

For questions or customization needs:
1. Check the code comments
2. Refer to Tailwind CSS documentation
3. Consult Font Awesome icon library
4. Review JavaScript console for errors

---

**Version**: 1.0.0
**Last Updated**: January 30, 2026
**Status**: ✅ Production Ready

Enjoy your beautiful coffee shop website! ☕
