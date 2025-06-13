import React from "react";
import styles from "./Ingredients.module.css";

function Ingredients() {
  return (
    <section className={styles.ingredientsWrapper}>
      <h2>Ingredients</h2>
      <ol>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ol>
    </section>
  );
}

export default Ingredients;
