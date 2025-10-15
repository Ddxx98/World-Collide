import React from "react";
import styles from "./CirclesPage.module.css";

const texts = [
  "Tutoring, mentoring, and life-skills programs help children stay in school, build confidence, and prepare for the future.",
  "We match children with safe foster families and mentors, creating consistency in their daily lives and education.",
  "We work with adoption services like Adopt Florida to help children find loving, permanent families whenever possible.",
  "Through camps, counseling, and mentoring, children find healing from trauma and space to rebuild trust.",
  "We provide strong networks of care and safe spaces, reducing the risks of trafficking and abuse.",
];

export default function CirclesPage() {
  return (
    <div className={styles.circlesBg}>
      <div className={styles.circlesContainer}>
        <div className={styles.circlesRow + " " + styles.circlesRowTop}>
          {texts.slice(0, 3).map((text, i) => (
            <div className={styles.circle + " " + styles.trimTop} key={i}>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
        </div>
        <div className={styles.circlesRow + " " + styles.circlesRowBottom}>
          {texts.slice(3).map((text, i) => (
            <div className={styles.circle + " " + styles.trimBottom} key={i}>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
