import React from 'react'
import styles from './Problems.module.css'
import BookRibbon from '../../assets/icons/Problems/book_ribbon.svg'
import Crib from '../../assets/icons/Problems/crib.svg'
import Cognition from '../../assets/icons/cognition.svg'
import Balance from '../../assets/icons/Problems/balance.svg'
import Wounds from '../../assets/icons/Problems/wounds_injuries.svg'
import Circle from '../../assets/icons/Problems/circles.svg'
import { NavLink } from 'react-router-dom'
import './Problems.module.css'

const problemsData = [
  {
    icon: BookRibbon,
    title: "Educational Struggles",
    content: "Fewer than 3% of former foster youth earn a bachelor’s degree by age 26, and about half don’t finish high school."
  },
  {
    icon: Crib,
    title: "Early Parenthood",
    content: "Around 40% of female foster youth have children by age 21, often without guidance or resources."
  },
  {
    icon: Cognition,
    title: "Instability & Trauma",
    content: "Frequent moves and family separation cause emotional trauma, mental health issues, and difficulty forming lasting relationships."
  },
  {
    icon: Balance,
    title: "Justice System Involvement",
    content: "Former foster youth are disproportionately affected by arrests and incarceration compared to peers."
  },
  {
    icon: Wounds,
    title: "Vulnerability to Exploitation",
    content: "Youth in foster care, especially those who run away, are highly at risk for human trafficking and abuse."
  },
  {
    icon: Circle,
    title: "Aging Out Without Support",
    content: "Many youth leave foster care at 18–21 with no permanent family, leading to homelessness, low education, and unemployment."
  }
]

function Problems() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <h1 className={styles.mainHeading}>The Problems</h1>
      </div>
      <div className={styles.grid}>
        {problemsData.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.iconBox}>
              <img src={item.icon} alt="" className={styles.icon} />
            </div>
            <div className={styles.subHeading}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>
          If you are interested in reading more the <NavLink className={styles.link} to="https://cafo.org/" target="_blank">Christian Alliance for Orphan's</NavLink> is an amazing resource 
        </p>
      </div>
    </div>
  )
}

export default Problems
