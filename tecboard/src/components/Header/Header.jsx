import React from 'react';
import './Header.css';

import logoHeader from '../../img/LogoHeader.png';

export function Header() {
  return (
    <>
      <header>
        <img src={logoHeader} alt='LogoTecboard' />
      </header>
    </>
  );
}
