import React from "react";
import styles from "./style.module.scss";

const FetchBox = ({ data, loading }: any) => {
  return (
    <div className={styles.fetchBox}>{loading ? <p>Loading...</p> : data}</div>
  );
};

export default FetchBox;
