# IdeaRefine 🚀

Transform rough website ideas into clear, actionable prompts for developers and AI tools.

## STRUCTURE of the app

idea-refine/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── .env # Your actual environment variables
│ ├── .env.example # Template for GitHub
│ ├── .gitignore
│ └── utils/
│ └── promptEnhancer.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── HeroSection.jsx
│ │ │ ├── HeroSection.css
│ │ │ ├── IdeaForm.jsx
│ │ │ ├── IdeaForm.css
│ │ │ ├── ImprovedIdea.jsx
│ │ │ └── ImprovedIdea.css
│ │ ├── App.js
│ │ ├── index.js # ← NEW: React entry point
│ │ └── styles.css
│ ├── public/
│ │ └── index.html # ← NEW: HTML template
│ ├── package.json
│ └── .gitignore
└── README.md

## Live Demo

Access the application at: `http://localhost:3000`

## Features

- 🎯 **Idea Enhancement**: Turns vague ideas into structured prompts
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations
- ⚡ **Fast Processing**: Real-time idea refinement
- 📋 **One-click Copy**: Easy prompt copying to clipboard
- 📱 **Fully Responsive**: Works on all devices

## How it works

- User enters a rough website idea
- System analyzes and structures the idea
- Enhanced prompt includes:
- Clear project description
- Suggested sections/features
- Technical requirements
- Target audience considerations

## Quick Start

download the ZIP file or clone the extracted file -- then go to the working directories and install packages as per back/front end folders.

### Method 1: Using Create React App (Easiest)

### Installation

1. **Clone and setup backend:**

```bash
# Clone the repository
git clone [<repository-url>](https://github.com/Abunagy1/idea-refine.git)
cd idea-refine

# Backend setup
cd backend
npm install
npm run dev
```

# Server runs on http://localhost:5001

# Frontend setup (in new terminal)

cd ../frontend
npm install
npm start

# App opens at http://localhost:3000

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
