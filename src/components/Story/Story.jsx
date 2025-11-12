import React, { useState, useEffect } from 'react'
import styles from './Story.module.css'
import Icon1 from '../../assets/icons/live_help.svg'
import Image1 from '../../assets/images/Story/pic1.jpg'
import Image2 from '../../assets/images/Story/pic2.jpg'
import Image3 from '../../assets/images/Story/pic3.jpg'
import Image4 from '../..//assets/images/Story/pic4.jpg'
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
      title: 'The Question',
      description:
        'This is why we founded Worlds Collide Ministries: to give children hope, support, and the chance for new beginnings. Every child we serve deserves the opportunity to experience care, love, and safety, even when the path is difficult.',
      image: Image1,
      icon: Icon1,
    },
    {
      title: 'Words Colliding',
      description:
        'When we met four year old Roxanne for the first time, we were shocked to see the unimaginable abuse she had faced. That weekend felt like two worlds colliding, our lives changed forever.',
      image: Image2,
      icon: Icon2,
    },
    {
      title: 'Becoming Family',
      description:
        'Three months later, we became the parents of Roxanne and her younger brother, Christopher. That collision of worlds didn’t destroy us; it created something beautiful, a family.',
      image: Image3,
      icon: Icon3,
    },
    {
      title: 'The Birth of the Org',
      description:
        'This is why we founded Worlds Collide Ministries: to give children hope, support, and the chance for new beginnings. Every child we serve deserves the opportunity to experience care, love, and safety, even when the path is difficult.',
      image: Image4,
      icon: Icon4,
    },
  ]

  const [mobileIndex, setMobileIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.story}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Our Story</h1>
        <div className={styles.subtitle}>
          <p>Read how we started Worlds Collide Ministries</p>
        </div>
      </div>
      <div className={isMobile ? styles.cardsMobile : styles.cards}>
        {isMobile ? (
          <>
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${arr[mobileIndex].image})` }}
              onClick={toggleDescription}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.iconRow}>
                  <div className={styles.iconCircle}>
                    <img
                      src={arr[mobileIndex].icon}
                      alt=""
                      className={styles.icon}
                      aria-hidden="true"
                    />
                  </div>
                  <p className={styles.cardTitle}>{arr[mobileIndex].title}</p>
                  <span className={styles.arrowWrap}>
                    {isDescriptionOpen ? (
                      <img
                        src={ArrowDown}
                        alt="Hide details"
                        className={`${styles.arrow} ${styles.arrowDown} ${styles.visible}`}
                      />
                    ) : (
                      <img
                        src={ArrowUp}
                        alt="Show details"
                        className={`${styles.arrow} ${styles.arrowUp} ${styles.visible}`}
                      />
                    )}
                  </span>
                </div>
                <div className={isDescriptionOpen ? styles.cardDescriptionContainer : styles.cardDescriptionContainerHidden}>
                  <p className={styles.cardDescription}>
                    {arr[mobileIndex].description}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.bottomNav}>
              <button
                className={styles.navArrow}
                onClick={() => {
                  setMobileIndex((i) => (i === 0 ? arr.length - 1 : i - 1))
                  setIsDescriptionOpen(false)
                }
                }
                aria-label="Previous story"
              >
                <img src={ArrowBack} alt="Previous" />
              </button>
              <button
                className={styles.navArrow}
                onClick={() => {
                  setMobileIndex((i) => (i === arr.length - 1 ? 0 : i + 1))
                  setIsDescriptionOpen(false)
                }
                }
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
              <div className={styles.cardContent}>
                <div className={styles.iconRow}>
                  <div className={styles.iconCircle}>
                    <img
                      src={item.icon}
                      alt=""
                      className={styles.icon}
                      aria-hidden="true"
                    />
                  </div>
                  <p className={styles.cardTitle}>{item.title}</p>
                  <span className={styles.arrowWrap}>
                    <img
                      src={ArrowUp}
                      alt="Show details"
                      className={`${styles.arrow} ${styles.arrowUp}`}
                    />
                    <img
                      src={ArrowDown}
                      alt="Hide details"
                      className={`${styles.arrow} ${styles.arrowDown}`}
                    />
                  </span>
                </div>
                <div className={styles.cardDescriptionContainer}>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.footer}>
        <p className={styles.description}>
          Hover or tap the cards to read the brief on each image.
        </p>
        <p>
          Know more <NavLink to="/about">about us</NavLink> here.
        </p>
      </div>
    </div>
  )
}

export default Story
