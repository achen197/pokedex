import React from "react";
import styles from "./PokemonCard.module.scss";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

function PokemonCardLink(props) {
  return (
    <div>
      <Link to="/pokemon">
        <Card key={props.id} className={styles.Card}>
          <img src={props.image} alt={props.name} />

          <p>
            #{props.number} {props.name}
          </p>
          {props.type.map(t => {
            return <Chip className={t} label={t} />;
          })}
        </Card>
      </Link>
    </div>
  );
}

export default PokemonCardLink;
