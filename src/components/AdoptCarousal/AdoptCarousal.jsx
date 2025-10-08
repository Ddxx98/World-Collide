import React, { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import axios from "axios";
import styles from "./AdoptCarousal.module.css";

const url = "https://dog.ceo/api/breeds/image/random/10";

function AdoptCarousel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { scrollRef, snapPointIndexes, refresh } = useSnapCarousel();

  useEffect(() => {
    let mounted = true;
    axios
      .get(url)
      .then((response) => {
        if (!mounted) return;
        setData(response.data.message || []);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Error fetching images");
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Refresh AFTER DOM/images are rendered (small delay to ensure layout)
  useEffect(() => {
    if (!data || data.length === 0) return;
    const t = setTimeout(() => {
      try { refresh(); } catch (e) { /* ignore */ }
    }, 120);
    return () => clearTimeout(t);
  }, [data, refresh]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className={styles.carousel} ref={scrollRef} aria-label="Adoptable dogs carousel">
      {data.map((imgSrc, i) => (
        <li
          key={i}
          className={`${styles.carouselItem} ${snapPointIndexes.has(i) ? styles.itemSnapPoint : ""}`}
        >
          <img
            src={imgSrc}
            alt={`Random dog ${i + 1}`}
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
