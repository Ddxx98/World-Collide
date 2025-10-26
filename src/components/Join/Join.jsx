import React from 'react'   
import styles from './Join.module.css'
import CustomButton from '../Button/Button'
import joinImage from '../../assets/images/join_crop.png'
import adoptLogo from '../../assets/images/adopt.png'
import ArrowOutward from '../../assets/icons/arrow_outward.svg'

function Join() {
    return (
        <section className={styles.joinSection}>
            <div className={styles.joinHeader}>
                <h2 className={styles.joinTitle}>Join us</h2>
            </div>
            <div className={styles.joinCards}>
                <div className={styles.joinMainCard}>
                    <div className={styles.joinImageBox}>
                        <img src={joinImage} className={styles.joinImage + " " + styles.joinImageCrop} alt="Join Us" />
                    </div>
                    <div className={styles.joinContent}>
                        <div className={styles.joinText}>
                            Don’t think you don’t have much to contribute. No amount is too small, even your spare change, even a single cent, can add up to love, safety, and hope in a child’s life
                        </div>
                        <CustomButton onClick={() => window.location.href = "https://www.paypal.com/donate/?hosted_button_id=8QY99CLBWJ2R2"} className="primary" size="lg">Donate Now <img src={ArrowOutward} alt="Arrow Outward" /></CustomButton>
                    </div>
                </div>
                <div className={styles.joinMainCard}>
                    <div className={styles.joinImageBox}>
                        <img src={adoptLogo} className={styles.joinImage} alt="Adopt Now" />
                    </div>
                    <div className={styles.joinContent}>
                        <div className={styles.joinText}>
                            Through Adopt Florida, you can explore the life changing journey of adoption. Every child deserves the love and stability of a permanent home.
                        </div>
                        <CustomButton onClick={() => window.location.href = "https://adoptflorida.org/"} className="primary" size="lg">Adopt Now</CustomButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join