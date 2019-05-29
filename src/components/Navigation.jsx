import React from 'react';
import Logo from '../assets/img/pokemon_logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Navigation.module.scss'

function Navigation() {
  return (
    <div className="App">
      <header className={styles.NavigationHeader}>
        <img className={styles.Logo} src={Logo} alt="News Logo" />
        <nav>
        <ul>
            <li><FontAwesomeIcon icon="newspaper" /><Link to='/'>All Pokemon</Link></li>
            <li><FontAwesomeIcon icon="globe-asia" /><Link to='/pokemon'>Grass</Link></li>
            <li><FontAwesomeIcon icon="briefcase" /><Link to='/business'>Water</Link></li>
            <li><FontAwesomeIcon icon="football-ball" /><Link to='/'>Poison</Link></li>
            <li><FontAwesomeIcon icon="coins" /><Link to='/'>Ground</Link></li>
        </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
