# Patient Dashboard

A modern, clean, and interactive patient dashboard built with React. This application provides a medical interface to view patient information, status, usage history, biomarker data, and risk scores.

<img width="1908" height="970" alt="Capture d’écran 2026-06-04 à 16 31 10" src="https://github.com/user-attachments/assets/6f05c59a-d41a-4902-87e4-2a5b8f3b3256" />
<img width="1908" height="970" alt="Capture d’écran 2026-06-04 à 16 31 25" src="https://github.com/user-attachments/assets/7bdd64cf-821c-49f9-b13c-c1177b9e9c57" />


## Features

- **Sidebar Navigation:** Quickly browse and select patients from the master list.
- **Dynamic Risk Score:** Visually see the patient's risk level with color-coded badges and risk bar gauges.
- **Usage History Chart:** Integrated line chart using `recharts` to view historical usage data over the week.
- **Biomarker Metrics:** View critical metrics like Heart Rate.
- **Modern UI:** Built from scratch using raw CSS variables, glassmorphism cards, and flex/grid layouts—all without relying on heavy external CSS frameworks.
- **Responsive Empty/Loading States:** Clean placeholders with animations for fetching backend data.

## Project Structure

- `src/components/` - React UI components (`PatientList`, `PatientInfo`, `RiskScore`, `UsageChart`, `Biomarker`)
- `src/hook/` - Custom React hooks for data fetching (`usePatients`, `useDashboardData`)
- `src/types/` - TypeScript definitions for data structures
- `src/App.css` - Global design system and layout styling
- `backend/` - FastAPI backend returning patient data (Python)

## Running the Application

### 1. Start the Backend API
The dashboard relies on a Python backend.
```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload --port 8000
```

### 2. Start the Frontend
In a new terminal window, run the React development server:
```bash
npm install
npm run dev
```

Navigate to the local URL provided by Vite (usually `http://localhost:5173`) in your browser to view the application.

## Technologies Used

- **React** (Hooks, state management)
- **TypeScript** (Static typing)
- **Vite** (Build tool)
- **Recharts** (Data visualization)
- **Vanilla CSS** (Custom modern design system)
