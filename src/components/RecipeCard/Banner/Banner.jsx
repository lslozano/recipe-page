import React from "react";
import styles from "./Banner.module.css";

import recipeBanner from "../../../assets/images/image-omelette.jpeg";

function Banner() {
  return (
    <figure className={styles.bannerWrapper}>
      <img
        src={recipeBanner}
        alt="Omelette Image"
      />
    </figure>
  );
}

export default Banner;
