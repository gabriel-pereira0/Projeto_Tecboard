import React from 'react';
import './Temas.css';

export function Temas({ tema }) {
  return (
    <>
      <h3 className='titulo-tema'>{tema.nome}</h3>
    </>
  );
}
