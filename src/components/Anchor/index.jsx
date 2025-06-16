import { FiExternalLink, FiDownload } from "react-icons/fi";

import classes from "./Anchor.module.css";

const Anchor = (props) => {
  if (props.title === "download") {
    return <Download {...props} />;
  }

  if (props.title === "external") {
    return <External {...props} />;
  }

  return <a {...props} className={classes.a}/>;
};

const Download = ({ children, ...props }) => (
  <a {...props} download className={classes.a}>
    {children} <FiDownload className={classes.icon} />
  </a>
);

const External = ({ children, ...props }) => (
  <a {...props} target="_blank" className={classes.a}>
    {children} <FiExternalLink className={classes.icon} />
  </a>
);

export default Anchor;
