import { createRoot } from "react-dom/client";
import Terminal from "./terminal";
import "./style.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<Terminal />);

  container.addEventListener("click", () => {
    const el = document.getElementById("terminal-input") as HTMLInputElement;
    if (el) el.focus();
  });
} else {
  console.log("No root element found");
}
