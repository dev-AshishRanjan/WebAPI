import React from "react";
import styles from "./style.module.scss";

const FetchBox = ({
  data,
  loading,
  mobileFetchBoxClicked,
  setmobileFetchBoxClicked,
}: any) => {
  return (
    <div
      className={`${mobileFetchBoxClicked && styles.show} ${styles.fetchBox}`}
    >
      {loading ? <p>Loading...</p> : data}
    </div>
  );
};

export default FetchBox;
