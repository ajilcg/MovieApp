import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
react({ jsxImportSource: "@emotion/react" });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <h1>Test</h1>
    <App />    
    </BrowserRouter>
  </React.StrictMode>,
)
export default defineConfig({
  plugins: [react()],
});