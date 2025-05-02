// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "animate.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "./index.css";
// import App from "./App.jsx";
// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>;
import "./i18n";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./ThemeContext.js/ThemeProvider.jsx";

// ✅ استيراد ThemeProvider
// import ThemeProvider from "./ThemeContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
