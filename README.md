# NEXUS // Creative Agency Portfolio

NEXUS is a high-end, responsive Single Page Application (SPA) built with React. Designed for a modern creative agency, it provides a seamless interface for showcasing projects, managing a dynamic portfolio, and filtering content in real-time.



## 🚀 Features

- **Full CRUD Functionality**: 
  - **Create**: Add new projects with custom titles, categories, and images.
  - **Read**: View a beautifully styled grid of current agency work.
  - **Update**: Edit existing project details through a synchronized form.
  - **Delete**: Remove outdated or completed projects instantly.
- **Dynamic Real-Time Search**: Filter the entire portfolio by name or category as you type.
- **Responsive "Nexus" UI**: A mobile-first, dark-themed aesthetic built with CSS Grid and Flexbox.
- **Data Integrity**: Uses `uuid` to ensure every project has a unique, collision-free identifier.

## 🛠️ Tech Stack

- **Frontend**: React.js (Functional Components & Hooks)
- **State Management**: Lifted State Pattern with `useState` and `useEffect`
- **ID Generation**: UUID v4
- **Build Tool**: Vite
- **Styling**: Custom CSS3 (Modern Grid/Flexbox)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/penina25/nexus-portfolio.git](https://github.com/penina26/nexus-portfolio.git)

## 📂 Folder Structure

```text
nexus-portfolio/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Global styles and images
│   ├── components/      # Reusable UI Components
│   │   ├── Form.jsx         # Dual-mode (Add/Edit) project form
│   │   ├── ProjectCard.jsx  # Individual project display unit
│   │   ├── ProjectList.jsx  # Grid container for project cards
│   │   └── Search.jsx       # Real-time filter input
│   ├── App.jsx          # Main application logic & state management
│   ├── App.css          # Core "Nexus" styling & transitions
│   └── main.jsx         # Application entry point
├── package.json         # Project dependencies (React, UUID, Vite)
└── README.md            # Project documentation