import React from "react";
import styles from "./Overview.module.css";

function Overview() {
  return (
    <section className={styles.overviewWrapper}>
      <header>
        <h1>Simple Omelette Recipe</h1>
      </header>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <section className={styles.preparationWrapper}>
        <h2>Preparation time</h2>
        <ol>
          <li>
            <span>Total: </span> Approximately 10 minutes
          </li>
          <li>
            <span>Preparation: </span> 5 minutes
          </li>
          <li>
            <span>Cooking: </span> 5 minutes
          </li>
        </ol>
      </section>
    </section>
  );
}

export default Overview;
