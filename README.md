# Ahib Afnan Siam - 3D Portfolio Frontend

A modern, interactive 3D portfolio website built with React, Three.js, and Vite. This frontend showcases my skills, projects, and experience through an immersive 3D environment with an AI-powered chat interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Linting](#linting)
- [Key Components](#key-components)
  - [3D Environment](#3d-environment)
  - [AI Chat Interface](#ai-chat-interface)
  - [Responsive Design](#responsive-design)
- [Assets Organization](#assets-organization)
- [Routing](#routing)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🌟 **Interactive 3D Environment**: Built with Three.js and React Three Fiber for an immersive experience
- 💬 **AI-Powered Chat Interface**: Intelligent assistant that provides information about me, my skills, projects, and experience
- 📱 **Fully Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes
- ⚡ **Lightning Fast**: Powered by Vite for blazing-fast development and production builds
- 🎨 **Modern UI/UX**: Tailwind CSS for beautiful, consistent styling with glassmorphism effects
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML structure
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- 🚀 **Performance Optimized**: Lazy loading, code splitting, and asset optimization

## Technologies Used

### Core Framework
- **React 18** - UI library for building the user interface
- **Vite** - Next-generation frontend tooling for fast development
- **React Router DOM** - Client-side routing

### 3D Graphics
- **Three.js** - 3D library for creating and displaying animated 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for React Three Fiber

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

### Utilities
- **@vercel/analytics** - Analytics for tracking visitor metrics
- **React Vertical Timeline Component** - For displaying work experience timeline

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Images, icons, 3D models, and audio
│   │   ├── icons/          # SVG icons
│   │   ├── images/         # PNG/JPG images
│   │   ├── models/         # GLB 3D models
│   │   └── sakura.mp3      # Background music
│   ├── components/         # React components
│   │   ├── ChatComponents/ # AI chat response components
│   │   └── ...             # Shared UI components
│   ├── constants/          # Application constants and data
│   ├── hooks/              # Custom React hooks
│   ├── models/             # 3D model components
│   ├── pages/              # Page components (routes)
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── vercel.json             # Vercel deployment configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahib-Afnan-Siam/Ahib-Siam-Portfolio.git
```

2. Navigate to the frontend directory:
```bash
cd Ahib-Siam-Portfolio/frontend
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

### Environment Variables

The frontend uses a `.env` file in the root directory for configuration:

```env
# Currently empty as we've removed EmailJS
```

## Development

### Running the Development Server

Start the development server with hot reloading:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production-ready build:

```bash
npm run build
# or
yarn build
```

The built files will be output to the `dist/` directory.

### Linting

Check for code quality issues:

```bash
npm run lint
# or
yarn lint
```

## Key Components

### 3D Environment

The portfolio features an interactive 3D environment powered by Three.js:

- **Island Scene**: Main interactive environment with clickable hotspots
- **Flying Plane**: Animated biplane that moves around the scene
- **Bird**: Animated bird that flies across the sky
- **Sky**: Dynamic sky background with rotation controls
- **Responsive Scaling**: Automatically adjusts to different screen sizes

### AI Chat Interface

The intelligent chat interface is a core feature that provides information about me:

#### Chat Features
- **Natural Conversations**: Context-aware responses with conversation history
- **Quick Action Cards**: Predefined options for easy navigation
- **Typing Indicators**: Realistic typing animations
- **Multiple Response Types**: Specialized components for different content types
- **Keyboard Navigation**: Full keyboard support with arrow keys and shortcuts

#### Chat Response Components
- **MeResponse**: Personal introduction with profile information
- **ProjectsResponse**: Showcase of projects with interactive cards
- **SkillsResponse**: Technical skills organized by category
- **ExperienceResponse**: Professional experience timeline
- **ContactResponse**: Contact information and social links
- **ResearchResponse**: Research papers and blog articles

### Responsive Design

The portfolio is fully responsive with mobile-first design principles:

- **Adaptive Layouts**: Flexbox and Grid layouts that adapt to screen size
- **Touch-Friendly**: Minimum 44px touch targets for mobile usability
- **Performance Optimized**: Lazy loading and optimized assets for mobile
- **Cross-Browser Compatible**: Works on all modern browsers

## Assets Organization

### Icons (`src/assets/icons/`)
SVG icons used throughout the application for consistent visual language.

### Images (`src/assets/images/`)
PNG/JPG images including profile pictures, company logos, and project images.

### 3D Models (`src/assets/models/`)
GLB files for 3D objects in the scene:
- Island environment
- Flying plane
- Bird animation

### Audio (`src/assets/sakura.mp3`)
Background music for the 3D environment.

## Routing

The application uses React Router for client-side navigation:

- `/` - Home page with 3D environment
- `/about` - Detailed about page with experience timeline
- `/projects` - Project showcase
- `/contact` - Contact form and information

## Performance Optimizations

### Code Splitting
- Dynamic imports for heavy components
- Lazy loading for non-critical resources

### Asset Optimization
- Compressed images and 3D models
- SVG icons for crisp rendering at any size
- Efficient CSS with Tailwind utility classes

### Caching Strategies
- Browser caching for static assets
- In-memory caching for API responses in chat interface

### Bundle Optimization
- Tree shaking to eliminate unused code
- Minification for production builds

## Accessibility

The portfolio follows WCAG 2.1 AA guidelines:

### Keyboard Navigation
- Full keyboard operability for all interactive elements
- Logical tab order and focus management
- Arrow key navigation for chat options

### Screen Reader Support
- Proper ARIA attributes and roles
- Semantic HTML structure
- Screen reader announcements for dynamic content

### Visual Accessibility
- Sufficient color contrast
- Focus indicators for interactive elements
- Responsive text sizing

### Mobile Usability
- Minimum 44px touch targets
- Adaptive layouts for different screen sizes
- Voice control compatibility

## Deployment

### Build Process
1. Ensure all environment variables are set
2. Run the build command: `npm run build`
3. Deploy the contents of the `dist/` directory

### Hosting Options
- **Vercel** (Recommended): Zero-config deployment with automatic optimizations
- **Netlify**: Drag-and-drop deployment with CDN distribution
- **Traditional Hosting**: Upload dist folder to any static hosting service

### CI/CD Integration
The project includes configuration files for popular CI/CD platforms:
- `vercel.json` for Vercel deployments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Contact

Ahib Afnan Siam - [@ahibafnan99](mailto:ahibafnan99@gmail.com)

Project Link: [https://github.com/Ahib-Afnan-Siam/Ahib-Siam-Portfolio](https://github.com/Ahib-Afnan-Siam/Ahib-Siam-Portfolio)