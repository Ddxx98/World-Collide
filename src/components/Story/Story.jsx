import React, { useState } from 'react'
import styles from './Story.module.css'
import Icon1 from '../../assets/icons/live_help.svg'
import Image1 from '../../assets/images/image2.jpg'
import Icon2 from '../../assets/icons/join.svg'
import Icon3 from '../../assets/icons/family_group.svg'
import Icon4 from '../../assets/icons/volunteer_activism.svg'
import ArrowUp from '../../assets/icons/keyboard_arrow_up.svg'
import ArrowDown from '../../assets/icons/keyboard_arrow_down.svg'
import ArrowBack from '../../assets/icons/arrow_back.svg'
import ArrowForward from '../../assets/icons/arrow_forward.svg'
import { NavLink } from 'react-router-dom'

function Story() {
  const arr = [
    {
      title: "The Question",
      description:
        "This is why we founded Worlds Collide Ministries: to give children hope, support, and the chance for new beginnings. Every child we serve deserves the opportunity to experience care, love, and safety, even when the path is difficult.",
      image: Image1,
      icon: Icon1,
    },
    {
      title: "Words Colliding",
      description:
        "We walk alongside foster children and their families with support and mentorship, stand up for their rights, and help every child have the chance for a safe, loving, and permanent home.",
      image: Image1,
      icon: Icon2,
    },
    {
      title: "Becoming Family",
      description:
        "We walk alongside foster children and their families with support and mentorship, stand up for their rights, and help every child have the chance for a safe, loving, and permanent home.",
      image: Image1,
      icon: Icon3,
    },
    {
      title: "The Birth of the org",
      description:
        "We walk alongside foster children and their families with support and mentorship, stand up for their rights, and help every child have the chance for a safe, loving, and permanent home.",
      image: Image1,
      icon: Icon4,
    },
  ]

  const [openIndices, setOpenIndices] = useState(arr.map(() => false))
  const [mobileIndex, setMobileIndex] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleToggle = (i) => {
    setOpenIndices((prev) => prev.map((open, idx) => (idx === i ? !open : open)))
  }

  const handleMobileToggle = () => setMobileOpen((open) => !open)

  const handleMobilePrev = () => {
    setMobileOpen(false)
    setMobileIndex((i) => (i === 0 ? arr.length - 1 : i - 1))
  }
  const handleMobileNext = () => {
    setMobileOpen(false)
    setMobileIndex((i) => (i === arr.length - 1 ? 0 : i + 1))
  }

  const isMobile = window.innerWidth <= 600

  return (
    <div className={styles.story}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Our Story</h1>
        <div className={styles.subtitle}>
            <p>Read how we started worlds collide ministries</p>
        </div>
      </div>
      <div className={styles.cards}>
        {isMobile ? (
          <>
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${arr[mobileIndex].image})` }}
            >
              <div className={styles.cardOverlay} />
              <div
                className={`${styles.iconContainer} ${
                  mobileOpen ? styles.iconContainerShifted : ''
                }`}
              >
                <div className={styles.iconCircle}>
                  <img
                    src={arr[mobileIndex].icon}
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <h2 className={styles.cardTitle}>{arr[mobileIndex].title}</h2>
                <button
                  className={styles.arrowButton}
                  onClick={handleMobileToggle}
                  aria-label={mobileOpen ? 'Close details' : 'Open details'}
                >
                  <img
                    src={mobileOpen ? ArrowDown : ArrowUp}
                    alt={mobileOpen ? 'Arrow Down' : 'Arrow Up'}
                    className={styles.arrow}
                  />
                </button>
              </div>
              <div
                className={`${styles.cardDescriptionContainer} ${
                  mobileOpen ? styles.open : ''
                }`}
              >
                <p className={styles.cardDescription}>{arr[mobileIndex].description}</p>
              </div>
            </div>
            <div className={styles.bottomNav}>
              <button
                className={styles.navArrow}
                onClick={handleMobilePrev}
                aria-label="Previous story"
              >
                <img src={ArrowBack} alt="Previous" />
              </button>
              <button
                className={styles.navArrow}
                onClick={handleMobileNext}
                aria-label="Next story"
              >
                <img src={ArrowForward} alt="Next" />
              </button>
            </div>
          </>
        ) : (
          arr.map((item, idx) => (
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
              key={idx}
            >
              <div className={styles.cardOverlay} />
              <div
                className={`${styles.iconContainer} ${
                  openIndices[idx] ? styles.iconContainerShifted : ''
                }`}
              >
                <div className={styles.iconCircle}>
                  <img
                    src={item.icon}
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <button
                  className={styles.arrowButton}
                  onClick={() => handleToggle(idx)}
                  aria-label={openIndices[idx] ? 'Close details' : 'Open details'}
                >
                  <img
                    src={openIndices[idx] ? ArrowDown : ArrowUp}
                    alt={openIndices[idx] ? 'Arrow Down' : 'Arrow Up'}
                    className={styles.arrow}
                  />
                </button>
              </div>
              <div
                className={`${styles.cardDescriptionContainer} ${
                  openIndices[idx] ? styles.open : ''
                }`}
              >
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.footer}>
        <p>Tap the icon to read about each phase.</p>
        <p>
          Know more <NavLink to="/about">about us</NavLink> here.
        </p>
      </div>
    </div>
  )
}

export default Story
