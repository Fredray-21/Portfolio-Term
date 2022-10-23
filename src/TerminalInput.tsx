import { useState } from "react";

const TerminalInput = (props: { route: any; setArrayResult: any }) => {
  const [lastInput, setLastInput] = useState<Array<string>>([""]);
  const arrCommandes = [
    "help",
    "clear",
    "echo",
    "date",
    "time",
    "github",
    "about",
    "competences",
  ];

  const HandleClick = (e: any) => {
    if (e.key === "Enter") {
      const el = document.getElementById("terminal-input") as HTMLInputElement;
      const command = el.value.trim().split(" ")[0].trim().toLowerCase();

      setLastInput((lastInput: any) => [...lastInput, command]);

      let commandArgs = [
        el.value
          .trim()
          .split(" ")
          .slice(1)
          .join(" ")
          .trim()
          .replace(/  +/g, " "),
      ];

      if (command === "clear") {
        props.setArrayResult([]);
      } else {
        props.setArrayResult((arrayResult: any) => [
          ...arrayResult,
          { commande: command, args: commandArgs },
        ]);
      }
      if (command === "github") {
        window.open("https://github.com/Fredray-21", "_blank");
      }
      el.value = "";
    }

    if (e.key === "ArrowUp") {
      const el = document.getElementById("terminal-input") as HTMLInputElement;
      el.value = lastInput[lastInput.length - 1];

      setTimeout(() => {
        const end = el.value.length;
        el.setSelectionRange(end, end);
      }, 1);
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const el = document.getElementById("terminal-input") as HTMLInputElement;
      let command = el.value.trim().split(" ")[0].trim().toLowerCase();
      let commandMatch = arrCommandes.filter((item) =>
        item.startsWith(command)
      );
      if (commandMatch.length > 0) {
        el.value = commandMatch[0];
      }
    }
  };

  return (
    <>
      {props.route}
      <input
        autoFocus
        id="terminal-input"
        type="text"
        spellCheck="false"
        onKeyDown={(e) => HandleClick(e)}
      />
    </>
  );
};

export default TerminalInput;
