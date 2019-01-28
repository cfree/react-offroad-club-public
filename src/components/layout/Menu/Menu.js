import React from 'react';
import { Link } from 'gatsby';

import styles from './Menu.module.scss';
import { shortSiteTitle, membershipUrl } from '../../../config';

const Menu = ({ siteTitle }) => (
  <nav className={styles.Menu}>
    <ul className={styles.list}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/run-info">Run Info</Link>
      </li>
      <li>
        <h1 className={styles.listHeading}>
          <Link to="/">
            <span className={styles.listBigNumber}>4</span>-Players
          </Link>
        </h1>
      </li>
      <li>
        <Link to="/join">Join Us</Link>
      </li>
      <li>
        <a href={membershipUrl}>Members</a>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
