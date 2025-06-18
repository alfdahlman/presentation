import { IoBulbOutline } from "react-icons/io5";

import classes from './BlockQuote.module.css'

const BlockQuote = ({ children }) => (
  <blockquote className={classes.container}>
    <IoBulbOutline className={classes.icon} />
    <div className={classes.text}>{children}</div>
  </blockquote>
);

export default BlockQuote;
