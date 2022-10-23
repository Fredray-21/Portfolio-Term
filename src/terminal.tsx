import React, { useState } from "react";

const TerminalRoute = () => {
  return (
    <span className="terminal-line-route terminal-line">me@/portfolio:~$ </span>
  );
};

const TerminalLine = (props: { route: any; text: string }) => {
  return (
    <div className="terminal-line">
      {props.route}
      <span className="terminal-line-text">{props.text}</span>
    </div>
  );
};

const Terminal = () => {
  const [arrayLines, setArrayLines] = useState(["test1", "test2", "test3"]);

  const TerminalInput = (props: { setValue: any; route: any }) => {
    const HandleClick = (e: any) => {
      if (e.key === "Enter") {
        const el = document.getElementById(
          "terminal-input"
        ) as HTMLInputElement;
        console.log(el.value);
        props.setValue((oldArray: any) => [...oldArray, el.value]);

        setTimeout(() => {
          el.value = "";
        }, 100);
      }
    };

    return (
      <>
        {props.route}
        <input
          autoFocus
          id="terminal-input"
          type="text"
          onKeyDown={(e) => HandleClick(e)}
        />
      </>
    );
  };

  const lines = arrayLines.map((line, i) => {
    return <TerminalLine key={i} route={TerminalRoute()} text={line} />;
  });

  return (
    <div id="terminal">
      <div id="console-emulator">
        {lines}
        <TerminalInput setValue={setArrayLines} route={TerminalRoute()} />
      </div>
    </div>
  );
};

export default Terminal;
