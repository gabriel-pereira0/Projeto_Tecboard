import React from 'react';
import './Botao.css';

export function Botao({ children, className, type }) {
  return (
    <>
      <button className='btn' type={type}>
        {children}
      </button>
    </>
  );
}
