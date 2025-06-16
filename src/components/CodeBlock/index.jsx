import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";

import classes from "./CodeBlock.module.css";

const CodeBlock = ({ lang, children }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className={classes.container}>
      <IoCopyOutline className={classes.icon} onClick={onCopy} />
      <SyntaxHighlighter className={classes.pre} language={lang} style={docco}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
