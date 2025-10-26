// import React, { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
// import axios from "axios";
import styles from "./AdoptCarousal.module.css";

import image1 from "../../assets/images/Carousal/pic1.jpg";
import image2 from "../../assets/images/Carousal/pic2.jpg";
import image3 from "../../assets/images/Carousal/pic3.jpg";
import image4 from "../../assets/images/Carousal/pic4.jpg";
import image5 from "../../assets/images/Carousal/pic5.jpg";
import image6 from "../../assets/images/Carousal/pic6.jpg";
import image7 from "../../assets/images/Carousal/pic7.jpg";
import image8 from "../../assets/images/Carousal/pic8.jpg";
import image9 from "../../assets/images/Carousal/pic9.jpg";
import image10 from "../../assets/images/Carousal/pic10.jpg";

function AdoptCarousel() {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const data = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const { scrollRef, snapPointIndexes, refresh } = useSnapCarousel();

  // useEffect(() => {
  //   let mounted = true;
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       if (!mounted) return;
  //       setData(response.data.message || []);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       if (!mounted) return;
  //       setError(err.message || "Error fetching images");
  //       setIsLoading(false);
  //     });

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // // Refresh AFTER DOM/images are rendered (small delay to ensure layout)
  // useEffect(() => {
  //   if (!data || data.length === 0) return;
  //   const t = setTimeout(() => {
  //     try { refresh(); } catch (e) { /* ignore */ }
  //   }, 120);
  //   return () => clearTimeout(t);
  // }, [data, refresh]);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <ul className={styles.carousel} ref={scrollRef} aria-label="Adoptable dogs carousel">
      {data.map((imgSrc, i) => (
        <li
          key={i}
          className={`${styles.carouselItem} ${snapPointIndexes.has(i) ? styles.itemSnapPoint : ""}`}
        >
          <img
            src={imgSrc}
            alt={`Random pic ${i + 1}`}
            className={styles.carouselImage}
            draggable={false}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export default AdoptCarousel;
