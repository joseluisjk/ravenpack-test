import React from 'react';
import { Navbar } from 'react-bootstrap';

import styles from './index.module.scss';

import logo from '../../assets/img/RavenPack.svg';

const NavBar = () => {
  return (
    <Navbar className={styles.navBar__Container} variant="dark" expand="lg" fixed="top">
      <Navbar.Brand className={styles.navBar__Brand} href="/">
        <img src={logo} alt="RavenPack Logo" />
        <span>React test made by Jota</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar