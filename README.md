# Md. Yash Rohan - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing professional experience, projects, and skills as a Full Stack Software Developer.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Hero Section**: Professional introduction with profile photo and social links
- **About Section**: Detailed overview of skills and expertise areas
- **Experience Section**: Complete work history with detailed job descriptions
- **Projects Showcase**: Real-world projects with technology stack and descriptions
- **Skills Section**: Animated skill bars and categorized expertise
- **Contact Section**: Contact form and professional contact information
- **Navigation**: Smooth scroll navigation with active section highlighting

## 🚀 Technologies Used

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React (icons)
- **Animations**: Framer Motion
- **Deployment**: Static Export (ready for Netlify/Vercel)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project:**

   ```bash
   cd portfolio-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your profile photo:**
   - Save your profile image as `profile.jpg` in the `public/` folder
   - Recommended size: 320x320 pixels or larger (square aspect ratio)

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page composition
│   └── components/
│       ├── Navbar.tsx       # Navigation component
│       ├── Hero.tsx         # Hero section with profile
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Work experience section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Skills display
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer component
├── public/
│   └── profile.jpg          # Profile photo (add your image here)
├── netlify.toml             # Netlify deployment config
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 📝 Customization Guide

### Personal Information

Update your personal details in these components:

1. **Hero.tsx** (lines 8-11, 49-59):
   - Name, title, and bio
   - Social media links (GitHub, LinkedIn, Email)

2. **About.tsx** (lines 47-56, 58-75):
   - Detailed bio and expertise areas
   - Frontend/Backend/Database/Architecture skills

3. **Experience.tsx** (lines 6-53):
   - Work history with companies, positions, dates
   - Job responsibilities and achievements
   - Technologies used at each role

4. **Projects.tsx** (lines 6-47):
   - Your actual projects with descriptions
   - Technology stacks and links

5. **Skills.tsx** (lines 6-37, 100-103):
   - Technical skills with proficiency levels
   - Additional skills tags

6. **Contact.tsx** (lines 34-38, 90-105):
   - Contact information
   - Social media links

7. **Footer.tsx** (lines 7-11, 27-29, 72-76):
   - Name, description, and contact info

### Profile Photo

1. Save your professional headshot as `profile.jpg` in the `public/` folder
2. The image should be square (1:1 aspect ratio) for best results
3. Recommended minimum size: 320x320 pixels
4. The website will automatically display it in a circular frame with a decorative border

### Styling

The website uses Tailwind CSS. Key customization points:

- **Colors**: Primary blue is `blue-600`. Change in component class names.
- **Fonts**: Inter font family (from Google Fonts in layout.tsx)
- **Spacing**: Consistent padding using Tailwind's spacing scale
- **Animations**: Framer Motion animations can be customized in each component

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `out/` folder to Netlify:
   - Drag and drop the `out/` folder to Netlify's deploy page, OR
   - Connect your GitHub repository for automatic deployments

### Option 2: Vercel

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Pages

1. Update `next.config.js`:

   ```javascript
   output: 'export',
   basePath: '/your-repo-name',
   ```

2. Build and deploy to GitHub Pages

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

**Md. Yash Rohan**

- 📧 Email: yashrohan22@gmail.com
- 📱 Phone: +880 1738360521
- 📍 Location: Dhaka, Bangladesh
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [Your GitHub Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Note**: This is a personal portfolio website. Feel free to use it as a template for your own portfolio, but please customize it with your own information and style.
