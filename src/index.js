import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "src/App";

if (process.env.NODE_ENV === "production") {
  console.log(
    "Hello! If you're interested in viewing the source code it's available at: https://github.com/jpmunz/portfolio"
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
