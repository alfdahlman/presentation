import { useRef, useState } from "react";
import { IoRefreshOutline } from "react-icons/io5";

import classes from "./Playground.module.css";

const getIframe = (html) => (tag) =>
  `
    <html>
      <body>
        ${tag}
        ${html}
      </body>
    </html>
`;

const Playground = ({ lang, html }) => {
  const [code, setCode] = useState("");
  const iframeRef = useRef(null);

  const getIframeWithTag = getIframe(html);

  const onUpdate = () => {
    if (!iframeRef.current) return;

    let tag = "";

    if (lang === "js") {
      tag = `<script>${formatJs(code)}</script>`;
    } else if (lang === "css") {
      tag = `<style>${code}</style>`;
    }

    iframeRef.current.srcdoc = getIframeWithTag(tag);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.input}>
        <IoRefreshOutline className={classes.icon} onClick={onUpdate} />
        <textarea
          className={classes.editor}
          placeholder={`Try out ${lang}...`}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className={classes.output}>
        <iframe
          ref={iframeRef}
          sandbox="allow-scripts"
          srcDoc={getIframeWithTag('')}
        />
      </div>
    </div>
  );
};

// const Tag = forwardRef(({ lang }, ref) => {
//   if (lang !== "css" && lang !== "js") return null;

//   if (lang === "css") {
//     return <style ref={ref}></style>;
//   }
//   if (lang === "js") {
//     return <script ref={ref}></script>;
//   }
// });

const formatJs = (code) => `
setTimeout(() => {
    ${code}
}, 0);
`;

export default Playground;
