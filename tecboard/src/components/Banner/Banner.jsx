import React from 'react';
import './Banner.css';
import imageHero from '../../img/ImageHero.png';

export function Banner() {
  return (
    <div className='container-banner'>
      <section className='banner-hero'>
        <img src={imageHero} alt='Imagem Hero' />
      </section>
    </div>
  );
}
