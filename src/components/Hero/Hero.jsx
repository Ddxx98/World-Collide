import React from 'react'
import styles from './Hero.module.css'
import Button from '../Button/Button'
import HeroImage from '../../assets/images/hero.png'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p>2 World Collide</p>
        <div className={styles.heroText}>
            <p>Care <span>today</span>, permanent homes tomorrow. Help us make it <span>possible</span>.</p>
        </div>
        <div className={styles.heroDescription}>
            <p>We walk alongside foster children and their families with support and mentorship, stand up for their rights, and help every child have the chance for a safe, loving, and permanent home.</p>
            <div className={styles.heroButtons}>
              <Button className="secondary" size="lg">Donate Now</Button>
            <Button className="primary" size="lg">Explore Adoption</Button>
            </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImage} alt="Hero" className={styles.image} />
      </div>
    </div>
  )
}

export default Hero