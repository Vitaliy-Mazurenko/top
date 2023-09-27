
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
