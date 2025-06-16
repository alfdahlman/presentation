import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

import classes from "./ToC.module.css";

const ToC = ({ links }) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
    setTimeout(() => {
      setShowBackdrop(false);
    }, 200);
  };

  const onOpen = () => {
    setShowBackdrop(true);
    setTimeout(() => {
      setShow(true);
    });
  };

  const onNavigate = (e) => {
    e.preventDefault();

    const id = e.currentTarget.href.split("#")[1];
    const target = document.querySelector(`#${id}`);
    const top = target.getBoundingClientRect().top + window.scrollY - 60;

    window.scrollTo({ top, behavior: "smooth" });
    onClose();
  };

  return (
    <>
      {/* MOBILE MENU */}
      <nav className={classes.untilMd}>
        <div className={classes.menuIconWrapper}>
          <IoMenu className={classes.icon} onClick={onOpen} />
        </div>
        <div
          className={`
            ${classes.backdrop} 
            ${show ? classes.backdropVisible : ""}
            ${showBackdrop ? classes.backdropOpen : ""}
            `}
          onClick={onClose}
        >
          <div
            className={`${classes.containerSm} ${
              show ? classes.containerSmOpen : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes.iconWrapper}>
              <IoCloseSharp className={classes.icon} onClick={onClose} />
            </div>
            <p className={classes.label}>Table of Contents</p>
            <hr />
            <ul className={classes.list}>
              {links.map(({ id, title }) => (
                <li key={id} className={classes.li}>
                  <a href={`#${id}`} className={classes.a} onClick={onNavigate}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* DESKTOP MENU */}
      <nav className={classes.fromMd}>
        <div className={classes.container}>
          <p className={classes.label}>Table of Contents</p>
          <hr />
          <ul className={classes.list}>
            {links.map(({ id, title }) => (
              <li key={id} className={classes.li}>
                <a href={`#${id}`} className={classes.a}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ToC;
