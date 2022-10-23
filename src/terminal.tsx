import React, { useState } from "react";
import ProgressBars from "./ProgressBar";
import TerminalCommande from "./TerminalCommande";
import TerminalRoute from "./TerminalRoute";
import { Function } from "./function";
import TerminalResult from "./TerminalResult";
import TerminalInput from "./TerminalInput";
const Terminal = () => {
  const [m_function] = useState(Function());
  const [arrayResult, setArrayResult] = useState<Array<any>>([]);

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
          `Age : ${m_function.getAgeFred()} ans`,
          "Permis : B",
        ];
        argument = [];
        break;
      case "help":
        result = arrHelp;
        argument = [];
        break;
      case "date":
        result = [
          "La date du jour est : " + m_function.getCurrentDate().split(" ")[0],
        ];
        argument = [];
        break;
      case "time":
        result = [
          "L’heure actuelle est :" + m_function.getCurrentDate().split(" ")[1],
        ];
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
        if (item.commande.trim() !== "") {
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
        <TerminalResult arrResult={result} isHelp={result === arrHelp} />
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
        <TerminalInput
          route={TerminalRoute()}
          setArrayResult={setArrayResult}
        />
      </div>
    </div>
  );
};

export default Terminal;
