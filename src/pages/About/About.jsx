import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";
import Campaign from "../../assets/icons/about/campaign.svg";
import Diversity from "../../assets/icons/about/diversity.svg";
import Counter from "../../assets/icons/about/counter.svg";
import Altitude from "../../assets/icons/about/altitude.svg";
import Strategy from "../../assets/icons/about/strategy.svg";
import Important from "../../assets/icons/about/label_important.svg";

const imageSlots = [1, 2, 3, 4, 5,6]; // Replace with your actual <img src=... />

const timelineSections = [
  {
    icon: (
      <img src={Campaign} alt="Campaign Icon"></img>
    ),
    heading: "Who we are",
    content: (
      <p>
        Worlds Collide Ministries, Inc. is a family-led ministry with a deeply personal mission. Our founders are Rodney Jason Scott and Luz Damarys Scott, and their children are Roxanne Elizabeth Taylor (27), Christopher Michael Scott (25), Jason Scott (17), Nathanael Isaac Scott (15), and Ian Daniel Scott (13). The ministry was founded on December 24, 2022, exactly 21 years after Roxanne and Christopher were first removed from their biological parents. This powerful story is the heart of our mission, driving our dedication to ensuring every child in foster care finds a loving, permanent home. Our family’s journey is the foundation of our work, and we are committed to helping other children and families navigate the foster care system with care and support. Worlds Collide Ministries, Inc. is a registered 501(c)(3) non-profit organization.
      </p>
    )
  },
  {
    icon: (
      <img src={Diversity} alt="Diversity Icon"></img>
    ),
    heading: "Worlds Collide: Our Family's Story and the Birth of a Ministry",
    content: (
      <>
        <div className={styles.timelineSubheading}>An Unexpected Question</div>
        <ul>
          <li>My wife came home from work one day and asked, “How would you feel if I brought a little girl home for the weekend?”</li>
          <li>I answered, “First of all you are crazy. No mother would allow their 4 year old to go home with a complete stranger!” Then I said, “OK, go ahead and ask. If they say yes, then, something is wrong.”</li>
        </ul>
        <div className={styles.timelineSubheading}>Meeting Roxanne</div>
        <ul>
          <li>The next day, I met four–year–old Roxanne for the first time. It became terrifyingly clear over that first weekend that Roxanne’s world was filled with unimaginable abuse.</li>
          <li>Meeting Roxanne felt like two planets colliding, the attachments being ripped from our world. The air of our own world had been completely sucked away. We were left angry, heartbroken, and knowing we had to do something but we didn’t know what.</li>
        </ul>
        <div className={styles.timelineSubheading}>The Collision and a New Family</div>
        <ul>
          <li>Only three months after meeting Roxanne, at the age of 26, we became the parents of a four–year–old and her two–year–old biological brother, Christopher. That violent collision between their world and ours is why we decided to name our ministry Worlds Collide Ministries.</li>
        </ul>
        <div className={styles.timelineSubheading}>A New Beginning</div>
        <ul>
          <li>When two planets collide, the elements can mix to form something entirely new. When our worlds collided, the result wasn’t destruction, but the creation of something new and beautiful: a family.</li>
          <li>We want to create that same opportunity for hope and new beginnings for every child we serve.</li>
        </ul>
      </>
    )
  },
  {
    icon: (
      <img src={Counter} alt="Counter Icon"></img>
    ),
    heading: "Our first initiative",
    content: (
      <>
        <div className={styles.timelineSubheading}>Royal Family Kids Camp for Orange and Seminole Counties</div>
        <ul>
          <li>Our first major initiative is to establish a <b>Royal Family Kids Camp</b> to serve the children of Orange and Seminole Counties.</li>
          <li>Our vision aligns with the like-minded 501(c)3 organization, One Family, which currently runs the Royal Family Kids Camp serving Volusia, Flagler, and Putnam Counties.</li>
          <li>You can learn more about their important work and shared vision by catching their weekly podcast on YouTube.</li>
          <li>You can also learn more about the national Royal Family Kids Camp at forthechildren.org.</li>
        </ul>
        <div className={styles.timelineSubheading}>We are currently seeking a host church!</div>
        <ul>
          <li>We are looking for a church to partner with us to help facilitate the Royal Family Kids Camp for Orange and Seminole Counties.</li>
          <li>A host church provides the essential physical space and support system needed to make this life changing week possible for children in our community.</li>
          <li>If your church is interested in becoming a host partner, we would love to talk with you!</li>
        </ul>
      </>
    ),
  },
  {
    icon: (
      <img src={Altitude} alt="Altitude Icon"></img>
    ),
    heading: "Our progress",
    content: (
      <ul>
        <li>Damarys and Jason completed training for the Kids Royal Family Kids Mentoring Program.</li>
        <li>We are looking for a host church.</li>
        <li>Damarys and Jason still need to attend a week long training for the Royal Family Kids Camp.</li>
        <li>We are looking for a location for our permanent camp.</li>
        <li>We are currently raising funds to purchase the camp where we will serve Orange and Seminole County. We also want to open the camp up to any Royal Family Kids camp in the nation that wants to use our camp.</li>
      </ul>
    )
  },
  {
    icon: (
      <img src={Strategy} alt="Strategy Icon"></img>
    ),
    heading: "Our vision",
    content: (
      <ul>
        <li>
          <b>Foster Care Advocacy:</b> We advocate for the rights and well–being of foster children, ensuring their voices are heard and needs are met.
        </li>
        <li>
          <b>Mentorship &amp; Support:</b> We provide support and mentorship to both foster children and their foster families, helping them navigate challenges.
        </li>
        <li>
          <b>Permanent Placement:</b> Our primary goal is to help children find a loving, permanent home through reunification, adoption, or guardianship.
        </li>
      </ul>
    )
  },
  {
    icon: (
      <img src={Important} alt="Important Icon"></img>
    ),
    heading: "To be continued",
    content: null,
  }
];

function About() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.aboutTitleWrap}>
          <h1 className={styles.aboutTitle}>About us</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.stackImages}>
              {imageSlots.map((idx) => (
                <div className={styles.imgBox} key={idx}>
                  {/* Replace with <img src="..." alt="..." /> as required */}
                  <div className={styles.imagePlaceholder}>
                    
                    <img src="https://via.placeholder.com/150" alt="Placeholder" /> 
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.timelineList}>
              {timelineSections.map((sec, i) => (
                <div className={styles.timelineSection} key={i}>
                  <div className={styles.timelineIconWrap}>
                    <span className={styles.timelineIcon}>{sec.icon}</span>
                    {/* {i < timelineSections.length - 1 && (
                      <span className={styles.timelineLine}></span>
                    )} */}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeading}>{sec.heading}</div>
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile-only images at the end */}
        <div className={styles.mobileImagesOnly}>
          <div className={styles.stackImages}>
            {imageSlots.map((idx) => (
              <div className={styles.imgBox} key={idx}>
                <div className={styles.imagePlaceholder}>
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <rect x="0" y="0" width="48" height="48" rx="8" fill="#EDF0F3"/>
                    <path d="M16 30l8-11 6 8L37 20" stroke="#B9BCC2" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="20" r="4" fill="#B9BCC2"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
