import React from "react";
import styles from "./Adopt.module.css";
import AdoptImage from "../../assets/images/adopt.png";
import CustomButton from "../Button/Button";
import AdoptCarousel from "../AdoptCarousal/AdoptCarousal";


function Adopt() {

    return (
        <div className={styles.page}>
            
            <AdoptCarousel />

            <div className={styles.centeredSection}>
                <p className={styles.paragraph}>
                    Don’t think you don’t have much to contribute. No amount is too small,
                    even your spare change, even a single cent, can add up to love,
                    safety, and hope in a child’s life
                </p>
                <CustomButton className="primary" size="lg">
                    Donate Now
                </CustomButton>
            </div>

            <div className={styles.infoSection}>
                <h2 className={styles.subHeading}>
                    Consider opening your heart and giving a child the gift of family.
                </h2>
                <p className={styles.infoParagraph}>
                    Every child deserves the love and stability of a permanent home. Through
                    Adopt Florida, you can explore the life changing journey of adoption.
                </p>
                <img
                    src={AdoptImage}
                    alt="Adoption support"
                    className={styles.infoImage}
                />
                <CustomButton className="secondary" size="lg" style={{ backgroundColor: "#E8FEF1" }}>
                    Explore Adoption
                </CustomButton>
            </div>
        </div>
    );
}

export default Adopt;
