import React from "react";
import styles from "./Help.module.css";
import CustomButton from "../Button/Button";
import ArrowOutward from "../../assets/icons/arrow_outward.svg";
import { NavHashLink } from 'react-router-hash-link';

const faqs = [
    "We are currently raising funds to purchase the camp where we will serve Orange and Seminole County.  We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.",
    "Damarys and Jason still need to attend a week long training for the Royal Family Kids Camp, we are looking help from you to accommodate their training",
    "We are looking for a host church for one of oir upcoming event.",
    "We are also looking for a location for our permanent camp.",
];

function Help() {
    const clickHandle = () => {
        window.location.href = "https://www.paypal.com/donate/?hosted_button_id=8QY99CLBWJ2R2";
    }

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
                        <CustomButton onClick={clickHandle} className="primary" size="lg">Donate Now <img src={ArrowOutward} alt="Arrow Outward" /></CustomButton>
                    </div>
                    <div className={styles.helpAction}>
                        <NavHashLink className={styles.helpContact} to="/services#contact">Contact Us</NavHashLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;