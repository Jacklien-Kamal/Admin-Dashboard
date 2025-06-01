import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./localization/i18n";
import { LocalizationProvider } from "./localization/LocalizationContext";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/Theme";
// import ThemeProvider from "./context/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LocalizationProvider>
      {/* <ThemeProvider> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </LocalizationProvider>
);
