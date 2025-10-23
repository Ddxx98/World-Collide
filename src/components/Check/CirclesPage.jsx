import React from "react";
import styles from "./CirclesPage.module.css";

const texts = [
  "Tutoring, mentoring, and life-skills programs help children stay in school, build confidence, and prepare for the future.",
  "We match children with safe foster families and mentors, creating consistency in their daily lives and education.",
  "We provide strong networks of care and safe spaces, reducing the risks of trafficking and abuse.",
  "Through camps, counseling, and mentoring, children find healing from trauma and space to rebuild trust.",
  "We work with adoption services like Adopt Florida to help children find loving, permanent families whenever possible.",
];

export default function CirclesPage() {
  return (
    <div className={styles.bg}>
      {/* Desktop & Tablet */}
      <div className={styles.desktopContainer}>
        <div className={styles.row}>
          <div className={`${styles.circle} ${styles.trimTop}`}>
            <span className={styles.text}>{texts[0]}</span>
          </div>
          <div className={`${styles.circle} ${styles.trimTop}`}>
            <span className={styles.text}>{texts[1]}</span>
          </div>
          <div className={`${styles.circle} ${styles.trimTop}`}>
            <span className={styles.text}>{texts[4]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.circle} ${styles.trimBottom}`}>
            <span className={styles.text}>{texts[3]}</span>
          </div>
          <div className={`${styles.circle} ${styles.trimBottom}`}>
            <span className={styles.text}>{texts[2]}</span>
          </div>
        </div>
      </div>

      {/* Mobile Diamond */}
      <div className={styles.mobileDiamond}>
        <div className={styles.mobileRow}>
          <div className={`${styles.circle} ${styles.trimTop}`}>
            <span className={styles.text}>{texts[0]}</span>
          </div>
          <div className={`${styles.circle} ${styles.trimTop}`}>
            <span className={styles.text}>{texts[1]}</span>
          </div>
        </div>
        <div className={styles.mobileCenterRow}>
          <div className={styles.centerCircle}>
            <span className={styles.text}>{texts[2]}</span>
          </div>
        </div>
        <div className={styles.mobileRow}>
          <div className={`${styles.circle} ${styles.trimBottom}`}>
            <span className={styles.text}>{texts[3]}</span>
          </div>
          <div className={`${styles.circle} ${styles.trimBottom}`}>
            <span className={styles.text}>{texts[4]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
