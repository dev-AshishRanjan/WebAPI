import React from "react";
import styles from "./style.module.scss";

const Error = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.hero}>
          <div className={styles.lefthalf}>
            <h1>Web API</h1>
            <h2 className={`tag`}>stop for</h2>
            <h2 className={`tag`}>all apis</h2>
          </div>
          <div className={styles.righthalf}>
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
