# 🏋️ AI Fitness Tracker

An intelligent fitness tracking application that helps users monitor their fitness activities, manage food intake, and track calories through an intuitive interface. The application integrates AI-powered food image analysis to identify food items and estimate their calorie content, making food logging faster and easier.

## ✨ Features

- **AI Food Recognition** — Upload a food image and let AI identify the food item.
- **Calorie Estimation** — Automatically estimate calories from food images.
- **Food Logging** — Record and manage food entries for tracking daily intake.
- **Fitness Tracking Dashboard** — View and manage fitness-related information.
- **AI-Powered Image Analysis** — Integrates Google Gemini for intelligent food image processing.
- **Responsive UI** — Modern interface built with React and TypeScript.

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- HTML5 & CSS3

### Backend
- Strapi
- Node.js
- REST API

### AI Integration
- Google Gemini API
- `@google/genai`

### Development Tools
- Git & GitHub
- npm

## 🧠 AI Food Snap

The AI Food Snap feature allows users to analyze food images and simplify food logging.

### Workflow

1. Upload or select a food image.
2. The image is sent to the backend for analysis.
3. The backend processes the image using the Google Gemini API.
4. AI identifies the food and estimates its calorie content.
5. The result is returned to the frontend in a structured format.
6. Users can use the result to log their food intake.

## 🏗️ Architecture

\`\`\`
React + TypeScript Frontend
          │
          │ REST API Request
          ▼
      Strapi Backend
          │
          ▼
   Image Analysis Service
          │
          ▼
    Google Gemini AI
          │
          ▼
 Food Name + Calorie Estimate
          │
          ▼
     Frontend / Food Log
\`\`\`

## 📂 Project Structure

\`\`\`
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── ...
│   └── package.json
│
└── README.md
\`\`\`

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
\`\`\`

### 2. Setup the Frontend

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### 3. Setup the Backend

Open a separate terminal:

\`\`\`bash
cd backend
npm install
\`\`\`

Create a `.env` file in your backend directory and configure your environment variables:

\`\`\`env
GEMINI_API_KEY=your_gemini_api_key
\`\`\`

Start Strapi in development mode:

\`\`\`bash
npm run develop
\`\`\`

The Strapi backend runs in development mode with automatic reloading.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | API key used for Google Gemini AI integration |

Never commit your `.env` file or expose API keys publicly.

## 🚀 Production

Build the frontend:

\`\`\`bash
npm run build
\`\`\`

Start the Strapi backend without development auto-reloading:

\`\`\`bash
npm run start
\`\`\`

## 🎥 Demo

Experience the application in action:




## 🔮 Future Improvements

- Personalized nutrition insights
- Daily and weekly calorie analytics
- Fitness progress visualization
- Enhanced AI food recognition
- Personalized fitness recommendations

## 👩‍💻 Author

**Aafreen Parveen**

---

⭐ If you find this project interesting, feel free to star the repository!
