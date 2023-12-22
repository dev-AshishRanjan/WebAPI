import React from "react";
import styles from "./style.module.scss";

const FetchBox = ({
  data,
  loading,
  mobileFetchBoxClicked,
  setmobileFetchBoxClicked,
  queryTime,
}: any) => {
  return (
    <div
      className={`${mobileFetchBoxClicked && styles.show} ${styles.fetchBox}`}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {queryTime !== null && (
            <p className={styles.queryTime}>Query time : {queryTime} ms</p>
          )}
          {data}
        </>
      )}
    </div>
  );
};

export default FetchBox;
