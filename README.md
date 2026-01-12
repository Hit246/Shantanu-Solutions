# Shantanu Solutions - Professional Website Development

![Shantanu Solutions](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.19-cyan)

A modern, professional website for Shantanu Solutions - offering fast, affordable, and SEO-optimized web development services for businesses across India.

## 🚀 Features

- **Modern React Architecture** - Built with React 19 and Vite for blazing-fast performance
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Comprehensive meta tags, structured data (JSON-LD), and sitemap
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Toast Notifications** - User-friendly feedback with react-hot-toast
- **WhatsApp Integration** - Direct customer contact via floating WhatsApp button
- **FAQ Section** - Comprehensive answers to common questions
- **Smooth Animations** - Scroll-triggered animations for enhanced UX
- **Professional Components** - Hero, Services, Portfolio, Testimonials, About, Contact, and more

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [EmailJS Configuration](#emailjs-configuration)
- [Deployment](#deployment)
- [SEO Configuration](#seo-configuration)
- [Customization Guide](#customization-guide)

## ⚡ Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd startup
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (see [Environment Setup](#environment-setup))

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
VITE_GA_MEASUREMENT_ID=your_ga_id
```

### Getting EmailJS Credentials

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{project_type}}` - Type of project
   - `{{budget}}` - Budget range
   - `{{message}}` - Message content
   - `{{to_name}}` - Your business name
4. Copy your Service ID, Template ID, and Public Key to the `.env` file

## 📁 Project Structure

```
startup/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── robots.txt           # Search engine directives
│   └── vite.svg             # Favicon
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   ├── FAQ.jsx          # Frequently asked questions
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Portfolio.jsx    # Portfolio showcase
│   │   ├── Process.jsx      # Work process section
│   │   ├── SEO.jsx          # SEO meta tags component
│   │   ├── Services.jsx     # Services offered
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── WhatsAppButton.jsx # WhatsApp floating button
│   │   └── WhyChooseUs.jsx  # Value propositions
│   ├── utils/
│   │   ├── scrollAnimations.js # Scroll animation hooks
│   │   └── structuredData.js   # SEO structured data
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .env                     # Environment variables (create this)
├── .gitignore
├── index.html               # HTML template
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── vite.config.js           # Vite configuration
```

## 🛠️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📧 EmailJS Configuration

### Template Setup

Create an email template in EmailJS with this structure:

**Subject:** New Website Inquiry from {{from_name}}

**Body:**

```
You have received a new inquiry from your website!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from the contact form on your website.
```

### Testing the Contact Form

1. Fill out the contact form on your website
2. Check your email inbox for the notification
3. Verify all fields are populated correctly

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Other Platforms

The build output is in the `dist` folder after running `npm run build`. You can deploy this folder to any static hosting service.

## 🔍 SEO Configuration

### Update Structured Data

Edit `src/utils/structuredData.js` to update your business information:

```javascript
export const organizationStructuredData = {
  name: "Your Business Name",
  url: "https://yourdomain.com",
  telephone: "+91-XXXXXXXXXX",
  email: "your@email.com",
  // ... other details
};
```

### Update Sitemap

Edit `public/sitemap.xml` with your actual domain:

```xml
<loc>https://yourdomain.com/</loc>
```

### Meta Tags

Meta tags are managed by the `SEO` component in `src/components/SEO.jsx`. Update default values as needed.

## 🎨 Customization Guide

### Update WhatsApp Number

Edit `src/components/WhatsAppButton.jsx`:

```javascript
const phoneNumber = "919876543210"; // Your WhatsApp number
```

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
}
```

### Update Content

- **Services**: Edit `src/components/Services.jsx`
- **Portfolio**: Edit `src/components/Portfolio.jsx`
- **About**: Edit `src/components/About.jsx`
- **FAQ**: Edit `src/components/FAQ.jsx`
- **Testimonials**: Edit `src/components/Testimonials.jsx`

### Add Your Logo

Replace `/public/vite.svg` with your logo and update references in:

- `index.html`
- `src/components/Navbar.jsx`
- `src/utils/structuredData.js`

## 📱 WhatsApp Integration

The WhatsApp floating button appears on all pages. To customize:

1. Update phone number in `src/components/WhatsAppButton.jsx`
2. Customize the pre-filled message
3. Adjust button position/styling as needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email hitarth0236@gmail.com or visit our website.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [EmailJS](https://www.emailjs.com/)
- [React Hot Toast](https://react-hot-toast.com/)

---

**Built with ❤️ by Shantanu Solutions**
