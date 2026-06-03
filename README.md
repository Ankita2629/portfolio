# Ankita Singh - Professional Portfolio Website 🚀

Welcome to the source repository for my professional portfolio website. This is a high-end, immersive, developer-focused portfolio designed with a custom **Futuristic Cyber-Tech Neon / Cyberpunk Console** theme. It showcases my credentials, full-stack systems, machine learning engineering models, and real-time interactive projects.

Live Site: [ankita-singh.vercel.app](https://ankita-singh.vercel.app/)

---

## 🌌 Interactive Visual Experience

This portfolio features a tailored developer interface designed to provide an engaging user experience:
1. **Interactive Canvas Constellation (Running Bubbles)**: An optimized 2D HTML5 canvas background rendering drifting cyan/purple nodes ("bubbles") connected by proximity-aware gradient lines. The particles interact dynamically by dispersing slightly when hovered.
2. **Cyber-Tech Neon Console**: Notched card panels (`cyber-card`), custom hex-clipped navbar, square progress loaders, and monospaced tech console status copy (`STATUS: SYSTEM READY //`) that mimic a futuristic CLI utility dashboard.
3. **Responsive Grid**: Built with modern CSS grid layers and Tailwind CSS v4 to guarantee fully fluid layouts on desktop, tablet, and mobile displays.

---

## 🛠️ Built With (Tech Stack)

* **Core Structure & Logic**: [React.js](https://react.dev/) + [Vite](https://vite.dev/) (fast HMR dev server and optimized production bundles).
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS custom variables and utility filters (HSL theme configuration).
* **Animations**: Pure CSS keyframe animations, HSL glow layers, and high-performance HTML5 Canvas requestAnimationFrame loops.
* **Icons**: [Lucide React](https://lucide.dev/).

---

## 📂 Project Highlights

The portfolio features interactive showcases for several of my major projects, complete with live urls, git code links, screenshots, and feature toggles:

* **FlowSpace**: A comprehensive Progressive Web App (PWA) productivity management application that helps users organize tasks, habits (with streak tracking and a GitHub-style heatmap), notes with Markdown support, reminders, and track progress via interactive analytics.
* **Arogyanvesha**: An Ayurveda-AI wellness assistant designed to compile ayurvedic consultation workflows and recommendations.
* **AirCollab**: A real-time collaborative workspace tool featuring multiplayer document sync and live room channels.
* **IDEAxAI**: An AI-powered ideas orchestrator and canvas compiling model prototype.
* **ChatMate**: A fast WebSocket-based real-time chat application with status trackers and group channels.
* **ManoMitra**: An intelligent mental health assistant chatbot focused on providing active guidance.
* **IRA**: An agentic AI assistant model designed to orchestrate complex task steps.

---

## 💻 Technical File Structure

```text
portfolio/
├── public/                 # Static assets (Resume, icons)
├── src/
│   ├── assets/             # Project screenshots and images
│   ├── components/         # Page layout sections and UI components
│   │   ├── AboutSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── StarBackground.jsx # HTML5 Canvas backdrop
│   ├── hooks/              # Custom React hooks (use-toast, etc.)
│   ├── lib/                # Utility modules (cn, etc.)
│   ├── pages/              # Routing entry pages (Home.jsx, NotFound.jsx)
│   ├── App.jsx             # Main Router and Page Container
│   ├── index.css           # Global theme variables & Cyber-Tech utility classes
│   └── main.jsx            # React root mount entry point
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite configurations (aliases, Tailwind)
```

---

## 🚀 Local Setup & Installation

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/ankita-singhhh/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

### 5. Build for Production
To compile and optimize modules for deployment:
```bash
npm run build
```
Vite will compile the code and generate static files inside the `dist/` directory, ready to host on platforms like Vercel, Netlify, or GitHub Pages.

---

## 📄 License
This project is open-source and available under the MIT License.
