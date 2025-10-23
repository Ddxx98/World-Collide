import React from "react";
import styles from "./Values.module.css";
import CirclesPage from "../Check/CirclesPage";


function Values() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>How do we add values</h1>
      </div>
      <CirclesPage/>
    </div>
  );
}

export default Values;
