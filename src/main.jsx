import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./localization/i18n";
import { LocalizationProvider } from "./localization/LocalizationContext";
import { BrowserRouter } from "react-router-dom";

import ThemeWrapper from "./context/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LocalizationProvider>
      <ThemeWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ThemeWrapper>
    </LocalizationProvider>
);
