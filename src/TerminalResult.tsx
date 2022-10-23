const TerminalResult = (props: { arrResult: any; isHelp: boolean }) => {
  if (props.arrResult[1] === undefined) {
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

export default TerminalResult;
