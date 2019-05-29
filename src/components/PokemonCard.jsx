import React from "react";
import styles from "./Pokemon.module.scss"

import {Card, Chip} from "@material-ui/core"


function PokemonCardLink(props) {
  return (
    <div className={styles.Container}>
      <Card key={props.id} className={styles.Card}>
        <img src={props.image} alt={props.name} />

        <p>
          #{props.number} {props.name}
        </p>
        {props.type.map(t => {
          return <Chip className={t} label={t} />;
        })}
      </Card>

      {/* <h1>Testing PokemonCard</h1>? */}
    </div>
  );
}

export default PokemonCardLink;
