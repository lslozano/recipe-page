import React from "react";
import styles from "./RecipeCard.module.css";

import Banner from "./Banner";
import Overview from "./Overview";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

function RecipeCard() {
  return (
    <article className={styles.cardWrapper}>
      <Banner />
      <Overview />
      <Ingredients />
      <hr />
      <Instructions />
      <hr />
      <Nutrition />
    </article>
  );
}

export default RecipeCard;
