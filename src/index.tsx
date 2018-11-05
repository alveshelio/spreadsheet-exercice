import * as React from "react";
import * as ReactDOM from "react-dom";

const onClickHandler = () => console.warn("test");
const App: React.SFC<{}> = () => (
  <div>
    <h1>App running</h1>
    <button onClick={onClickHandler}>Submit!!!</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
