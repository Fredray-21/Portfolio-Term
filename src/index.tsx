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

  container.addEventListener("keydown", (e) => {
    //scroll to bottom
    const el = document.getElementById("terminal-input") as HTMLInputElement;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
} else {
  console.log("No root element found");
}
