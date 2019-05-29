import React from "react";
import styles from "./Pokemon.module.scss";

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.setState = {

    }
  }

  render() {
    return (
      <div className={styles.Container}>
        <h1>Here is the pokemon stats</h1>
      </div>
    );
  }
}

export default Pokemon;
