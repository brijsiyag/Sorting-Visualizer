import React from "react";
import Prism from "prismjs";
import "./PrismCpp.css";
import { createNotification } from "../../Notification";
import { Button } from "@mui/material";
export class PrismCode extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  };
  render() {
    const { code, plugins, language } = this.props;
    return (
      <pre
        className={!plugins ? "" : plugins.join(" ")}
        style={{ position: "relative" }}
      >
        <Button
          variant="outlined"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={() => {
            navigator.clipboard.writeText(code);
            createNotification("Code copied to Clipboard!!", "success", 3000);
          }}
        >
          Copy
        </Button>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    );
  }
}
