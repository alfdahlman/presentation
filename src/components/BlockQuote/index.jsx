import { IoMdQuote } from "react-icons/io";

import classes from './BlockQuote.module.css'

const BlockQuote = ({ children }) => (
  <blockquote className={classes.container}>
    <IoMdQuote className={classes.icon} />
    <div className={classes.text}>{children}</div>
  </blockquote>
);

export default BlockQuote;
