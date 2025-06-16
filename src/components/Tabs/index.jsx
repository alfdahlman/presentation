import React, { useState } from "react";
//import { useMDXComponents } from "@mdx-js/react";

import classes from "./Tabs.module.css";

const Tabs = ({ children }) => {
  // const components = useMDXComponents();
  const [currentView, setCurretView] = useState(0);
  const tabs = React.Children.toArray(children);

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        {tabs.map(({ props: { title } }, i) => (
          <button
            className={`${classes.btn} ${
              currentView === i ? classes.btnActive : ""
            }`}
            key={i}
            onClick={() => setCurretView(i)}
          >
            {title}
          </button>
        ))}
      </nav>
      {tabs[currentView]}
    </div>
  );
};

export const Tab = ({ children }) => (
  <div className="tab">
    {children}
  </div>
);

export default Tabs;
