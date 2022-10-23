import TerminalRoute from "./TerminalRoute";

const TerminalCommande = (props: { text: any }) => {
  return (
    <div className="terminal-line">
      {TerminalRoute()}
      <span className="terminal-line-result terminal-line">{props.text}</span>
    </div>
  );
};

export default TerminalCommande;
