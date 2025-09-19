import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      accentColor="gray"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      appearance="dark"
    >
      <App />
    </Theme>
  </StrictMode>
);
