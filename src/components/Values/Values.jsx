import React from "react";
import styles from "./Values.module.css";

const valuesArr = [
  "Tutoring, mentoring, and life-skills programs help children stay in school, build confidence, and prepare for the future.",
  "We match children with safe foster families and mentors, creating consistency in their daily lives and education.",
  "We provide strong networks of care and safe spaces, reducing the risks of trafficking and abuse.",
  "Through camps, counseling, and mentoring, children find healing from trauma and space to rebuild trust.",
  "We work with adoption services like Adopt Florida to help children find loving, permanent families whenever possible.",
];

function Values() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>How do we add values</h1>
      </div>
      <div className={styles.circlesContainer}>
        <div className={styles.row}>
          {valuesArr.slice(0, 3).map((text, i) => (
            <div key={i} className={styles.circle}>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.row} ${styles.bottomRow}`}>
          {valuesArr.slice(3, 5).map((text, i) => (
            <div key={i} className={styles.circle}>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Values;
