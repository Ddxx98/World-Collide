import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import styles from './Home.module.css'
import Story from '../../components/Story/Story'
import Problems from '../../components/Problems/Problems'
import Values from '../../components/Values/Values'
import Help from '../../components/Help/Help'
import Adopt from '../../components/Adopt/Adopt'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className={styles.content}>
        <p>Help us <span>help children</span></p>
        <p>Join us <span>join change</span></p>
        <p>Lift us <span>lift hope</span></p>
      </div>
      <Story />
      <div className={styles.quoteBox}>
        <div>
          <p className={styles.quoteText}>
            Children are the<span className={styles.highlight}>hands</span>by which we<span className={styles.highlight}>take hold</span>of heaven
          </p>
          <div className={styles.poet}>
            — Henry Ward Beecher
          </div>
        </div>
      </div>
      <Problems />
      <Values />
      <Help />
      <div className={styles.quoteBox}>
        <div>
          <p className={styles.quoteText}>
            Not<span className={styles.highlight}>all of us can do great</span>things. But we can do<span className={styles.highlight}>small things</span>with<span className={styles.highlight}>great love.</span>
          </p>
          <div className={styles.poet}>
            - Mother Theresa
          </div>
        </div>
      </div>
      <Adopt />
      <Footer />
    </div>
  )
}


export default Home