import React from "react";
import styles from "./Headlines.module.scss";
import "../App.css";

import pokemonData from "../assets/pokemonData.json";

import Grid from "@material-ui/core/Grid";
import PokemonCardLink from "./PokemonCardLink";


export class Headlines extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData
    };
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className={styles.Container}>
        <Grid container spacing={1}>
            <Grid item xs={3}>
            {pokemon.pokemon.map(item => (
              <PokemonCardLink 
                  key={item.id}
                  image={item.img}
                  number={item.num}
                  name={item.name}
                  type={item.type}
              />
            ))}
            </Grid>
       
        </Grid>
      </div>
    );
  }
}

export default Headlines;
