import React from "react";
import styles from "./Nutrition.module.css";

function Nutrition() {
  return (
    <section className={styles.nutritionWrapper}>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <thead className={styles.visuallyHidden}>
          <tr>
            <th scope="col">Nutrient</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Calories</th>
            <td>277kcal</td>
          </tr>
          <tr>
            <th scope="row">Carbs</th>
            <td>0g</td>
          </tr>
          <tr>
            <th scope="row">Protein</th>
            <td>20g</td>
          </tr>
          <tr>
            <th scope="row">Fat</th>
            <td>22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Nutrition;
