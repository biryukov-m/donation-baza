import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      Header
      <nav>
        <ul>
          <li className={styles.link}>
            <a href="/">header link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
