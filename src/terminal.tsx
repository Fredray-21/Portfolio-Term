import React, { useEffect, useState } from "react";

const Terminal = () => {
  const [arrayResult, setArrayResult] = useState<Array<any>>([]);
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

  const arrHelp = [
    "help - Montrer cette aide - help",
    "clear - Effacer le terminal - clear",
    "echo - Écrire l'entrée - echo <text>",
    "date - Afficher la date - date",
    "time - Afficher l'heure - time",
    "github - Ouvrir mon github - github",
    "about - Afficher mon à propos de moi - about",
    "competences - Afficher mes compétences - competences",
  ];

  const TerminalInput = (props: { route: any }) => {
    const HandleClick = (e: any) => {
      if (e.key === "Enter") {
        const el = document.getElementById(
          "terminal-input"
        ) as HTMLInputElement;
        const command = el.value.trim().split(" ")[0].trim().toLowerCase();

        setLastInput((lastInput) => [...lastInput, command]);

        let commandArgs = [
          el.value
            .trim()
            .split(" ")
            .slice(1)
            .join(" ")
            .trim()
            .replace(/  +/g, " "),
        ];

        if (command == "clear") {
          setArrayResult([]);
        } else {
          setArrayResult((arrayResult) => [
            ...arrayResult,
            { commande: command, args: commandArgs },
          ]);
        }
        if (command == "github") {
          window.open("https://github.com/Fredray-21", "_blank");
        }
      }

      if (e.key === "ArrowUp") {
        const el = document.getElementById(
          "terminal-input"
        ) as HTMLInputElement;
        el.value = lastInput[lastInput.length - 1];

        setTimeout(() => {
          const end = el.value.length;
          el.setSelectionRange(end, end);
        }, 1);
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const el = document.getElementById(
          "terminal-input"
        ) as HTMLInputElement;
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

  const result = arrayResult.map((item, i) => {
    let result: any;
    let argument: any;
    console.log(item.commande);
    switch (item.commande.trim()) {
      case "echo":
        result = item.args;
        argument = item.args;
        break;
      case "github":
        result = ["@Fredray-21", "Ouverture du compte github ..."];
        argument = [];
        break;
      case "about":
        result = [
          "A propos de moi",
          "- - -",
          "Prénom : Frédéric",
          "Nom : Dabadie",
          `Age : ${getAgeFred()} ans`,
          "Permis : B",
        ];
        argument = [];
        break;
      case "help":
        result = arrHelp;
        argument = [];
        break;
      case "date":
        result = ["La date du jour est : " + getCurrentDate().split(" ")[0]];
        argument = [];
        break;
      case "time":
        result = ["L’heure actuelle est :" + getCurrentDate().split(" ")[1]];
        argument = [];
        break;
      case "competences":
        result = [
          "Mes competences",
          "- - -",
          ProgressBars(100) + "HTML",
          ProgressBars(80) + "CSS",
          ProgressBars(70) + "JavaScript",
          ProgressBars(80) + "Typescript",
          ProgressBars(80) + "React",
          ProgressBars(70) + "NodeJS",
          ProgressBars(60) + "MySQL",
          ProgressBars(80) + "Git",
          ProgressBars(90) + "SQL",
        ];
        argument = [];
        break;
      default:
        result = [];
        if (item.commande.trim() != "") {
          result = [
            `Commande '${item.commande.trim()}' non trouvée !`,
            "Tapez 'help' pour voir la liste des commandes.",
          ];
        }
        argument = item.args;
        break;
    }

    return (
      <span key={i}>
        <TerminalCommande
          text={item.commande + " " + argument.join("").trim()}
        />
        <TerminalResult arrResult={result} isHelp={result == arrHelp} />
      </span>
    );
  });

  return (
    <div id="terminal">
      <div id="console-emulator">
        <div className="terminal-line terminal-line-text">
          \ [ . _ . ] / Bienvenue sur mon portfolio.
        </div>
        <div className="terminal-line terminal-line-text">- - -</div>
        <div className="terminal-line terminal-line-text">
          Tapez 'help' pour voir la liste des commandes.
        </div>
        <div className="terminal-line terminal-line-text">- - -</div>
        {result}
        <TerminalInput route={TerminalRoute()} />
      </div>
    </div>
  );
};

const TerminalRoute = () => {
  return (
    <span className="terminal-line-route terminal-line">me@/portfolio:~$ </span>
  );
};

const TerminalCommande = (props: { text: any }) => {
  return (
    <div className="terminal-line">
      {TerminalRoute()}
      <span className="terminal-line-result terminal-line">{props.text}</span>
    </div>
  );
};

const TerminalResult = (props: { arrResult: any; isHelp: boolean }) => {
  if (props.arrResult[1] == undefined) {
    return (
      <div className="terminal-line">
        <span className="terminal-line">{props.arrResult[0]}</span>
      </div>
    );
  } else {
    return (
      <div className="terminal-line">
        <table id="table-help">
          <tbody>
            {props.isHelp &&
              props.arrResult.map((item: any, i: any) => {
                return (
                  <tr key={i}>
                    <td className="terminal-line">{item.split("-")[0]}</td>
                    <td className="terminal-line">{item.split("-")[1]}</td>
                    <td className="terminal-line">{item.split("-")[2]}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!props.isHelp &&
          props.arrResult.map((item: any, i: any) => {
            return (
              <div key={i} className="terminal-line">
                {item}
              </div>
            );
          })}
      </div>
    );
  }
};

const getAgeFred = () => {
  var today = new Date();
  var birthDate = new Date("2002-04-21");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age.toString();
};

const getCurrentDate = () => {
  var today = new Date();
  var date =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  return date.toString();
};

const ProgressBars = (progress: number) => {
  const barStart = "[";
  const barProgress = "＝";
  const barEmpty = "　";
  const barEnd = "] ";
  const barLengthCaracter = 10;
  const barLength = barLengthCaracter - 2;
  const barProgressLength = Math.round((progress / 100) * barLength);
  const barEmptyLength = barLength - barProgressLength;
  const barProgressString = barProgress.repeat(barProgressLength);
  const barEmptyString = barEmpty.repeat(barEmptyLength);
  const progressNumber =
    progress + "%" + " ".repeat(progress.toString().length == 3 ? 1 : 3);
  const bar =
    progressNumber + barStart + barProgressString + barEmptyString + barEnd;
  return bar;
};

export default Terminal;
