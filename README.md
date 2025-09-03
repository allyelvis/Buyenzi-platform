# Buyenzi - Modern Dashboard Platform

A modern dashboard for the Buyenzi platform, integrating fintech, e-commerce, and blockchain features into a seamless user experience.

## ✨ Features

*   **Comprehensive Dashboard:** Get a quick overview of your portfolio, balance, and recent activities with interactive charts.
*   **E-commerce Integration:** Browse and view featured products directly from the dashboard.
*   **Transaction Management:** View a list of recent transactions with detailed information in an accessible modal view. Users can also delete transactions with a confirmation step.
*   **Web3 Connectivity:** Configure and switch between different blockchain networks (including default networks like Ethereum and Polygon, and custom RPC networks) for dApp interaction.
*   **Responsive & Modern UI:** Built with Tailwind CSS for a clean, responsive, and intuitive user interface that looks great on all devices.
*   **Component-Based Architecture:** Developed with React and TypeScript for a scalable and maintainable codebase.

## 🛠️ Tech Stack

*   **Frontend:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Charting:** [Recharts](https://recharts.org/)

## 🚀 Getting Started

This project is set up as a static web application using ES modules. No build step is required.

1.  **Prerequisites:** A modern web browser.
2.  **Running Locally:** Simply serve the `index.html` file using a local web server (e.g., VS Code's Live Server extension).
3.  **API Key:** If integrating with backend services, ensure necessary API keys are configured in the execution environment.

## 📂 Project Structure

```
.
├── components/
│   ├── AddNetworkModal.tsx     # Modal for adding custom networks
│   ├── Card.tsx                # Reusable card component
│   ├── Chart.tsx               # Chart component for portfolio visualization
│   ├── Dashboard.tsx           # Main dashboard view
│   ├── Header.tsx              # Top navigation header
│   ├── Settings.tsx            # Settings page for network config
│   ├── Sidebar.tsx             # Main sidebar navigation
│   └── TransactionModal.tsx    # Modal for transaction details
├── App.tsx                     # Main application component, handles view routing and state management
├── constants.tsx               # Icons, mock data, default networks, and navigation items
├── index.html                  # The entry point of the application
├── index.tsx                   # Renders the React application into the DOM
├── metadata.json               # Application metadata
└── types.ts                    # TypeScript type definitions for the application
```
