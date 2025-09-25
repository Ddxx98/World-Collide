import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import styles from './Home.module.css'
import Story from '../../components/Story/Story'

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
    </div>
  )
}


export default Home