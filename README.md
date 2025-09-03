# 🚀 Navneet Pathak - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and achievements. Built with cutting-edge technologies and featuring a beautiful dark/light mode toggle.

## ✨ Features

### 🎨 **Design & User Experience**
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Modern UI/UX**: Clean, professional design with beautiful animations
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Accessibility**: High contrast ratios and keyboard navigation support

### 🎭 **Animations & Interactions**
- **Framer Motion**: Smooth page transitions and component animations
- **3D Effects**: Rotating elements and depth-based animations
- **Staggered Animations**: Sequential element reveals for better visual flow
- **Hover Effects**: Interactive buttons and cards with scale/rotation effects
- **Scroll Animations**: Elements animate as they come into view

### 📱 **Responsive Features**
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Adaptive Layout**: Flexible grid systems that work on all screen sizes
- **Mobile Menu**: Collapsible navigation menu for small screens
- **Touch Optimized**: Proper touch targets and gesture support

### 🎯 **Content Sections**
- **Hero Section**: Dynamic role display with animated text transitions
- **About Me**: Personal story with interactive highlight cards
- **Skills**: Comprehensive skill showcase with progress indicators
- **Projects**: Featured projects with detailed descriptions and live links
- **Achievements**: Milestones and fun facts with engaging visuals
- **Contact**: Easy-to-use contact form and social links

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with excellent IDE support
- **Vite**: Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **DaisyUI**: Beautiful component library built on Tailwind
- **CSS Variables**: Dynamic theming with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### **Animation & Motion**
- **Framer Motion**: Production-ready motion library for React
- **Custom Animations**: Hand-crafted animations for unique user experience
- **Performance Optimized**: Efficient animations with proper cleanup

### **State Management**
- **React Context**: Global theme state management
- **Local Storage**: Persistent theme preferences
- **Custom Hooks**: Reusable logic for theme management

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting for consistent style
- **TypeScript**: Static type checking
- **Hot Module Replacement**: Instant development feedback

### **Icons & Assets**
- **React Icons**: Comprehensive icon library (Font Awesome, Simple Icons)
- **Custom Gradients**: Beautiful color schemes and transitions
- **Optimized Images**: Web-optimized assets for fast loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/navneetpathak1909/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Achievements.tsx # Achievements & fun facts
│   ├── AboutRole.tsx   # Animated role display
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### **Theme Colors**
Update the CSS variables in `src/index.css`:
```css
:root {
  --color-primary: 59 130 246;    /* Blue */
  --color-secondary: 147 51 234;  /* Purple */
  --color-accent: 236 72 153;     /* Pink */
}
```

### **Content Updates**
- **Personal Info**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify `src/components/Projects.tsx` with your projects
- **Skills**: Update `src/components/Skills.tsx` with your skills
- **Social Links**: Update links in `src/components/Hero.tsx` and `src/components/Navbar.tsx`

### **Styling**
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Update font families in `src/index.css`
- **Animations**: Customize Framer Motion animations in components

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Implementation

### **Theme System**
- Context-based theme management
- localStorage persistence
- Smooth transitions between themes
- CSS variable-based color system

### **Animation System**
- Framer Motion for complex animations
- Intersection Observer for scroll animations
- Staggered children animations
- Performance-optimized motion

### **Responsive Design**
- Mobile-first CSS approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### **Netlify**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### **GitHub Pages**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/navneetpathak1909/portfolio/issues).

## 📞 Contact

- **Email**: navneetpathak1909@gmail.com
- **LinkedIn**: [navneetpathak1909](https://www.linkedin.com/in/navneetpathak1909/)
- **GitHub**: [navneetpathak1909](https://github.com/navneetpathak1909)
- **LeetCode**: [navneetpathak19](https://leetcode.com/navneetpathak19)

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for utility-first styling
- **React Icons** for beautiful icons
- **Vite** for lightning-fast development

---

⭐ **Star this repository if you found it helpful!**