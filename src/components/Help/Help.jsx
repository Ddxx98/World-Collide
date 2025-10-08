import React from "react";
import styles from "./Help.module.css";
import CustomButton from "../Button/Button";

const faqs = [
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
];

function Help() {
    return (
        <div className={styles.helpBg}>
            <div className={styles.helpContent}>
                <div className={styles.helpBox}>
                    <h2 className={styles.heading}>Looking Immediate for Help</h2>
                </div>
                {faqs.map((faq, i) => (
                    <div key={i} className={styles.helpBox}>
                        <p>{faq}</p>
                    </div>
                ))}
                <div className={styles.helpBox + " " + styles.lastBox}>
                    <div className={styles.helpButton}>
                        <CustomButton className="primary" size="lg">Donate Now </CustomButton>
                    </div>
                    <div className={styles.helpAction}>
                        <a className={styles.helpContact} href="/contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;