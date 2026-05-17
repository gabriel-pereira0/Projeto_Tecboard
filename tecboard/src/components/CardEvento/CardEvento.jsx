import React from 'react';
import './CardEvento.css';

export function CardEvento({ evento }) {
  return (
    <>
      <div className='card-evento'>
        <img className='imagem-evento' src={evento.capa} alt={evento.titulo} />
        <div className='info-evento'>
          <p className='tag-evento'>{evento.tema}</p>
          <p className='data'>
            {new Date(evento.data).toLocaleDateString('pt-BR')}
          </p>
          <h4 className='titulo'>{evento.titulo}</h4>
          <p className='descricao-evento'>{evento.descricao}</p>
        </div>
      </div>
    </>
  );
}
