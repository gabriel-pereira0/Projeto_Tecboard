import React from 'react';
import './ListaSuspensa.css';

export function ListaSuspensa({ itens, name }) {
  return (
    <select className='lista-suspensa' defaultValue='' name={name}>
      <option value='' disabled>
        Selecione uma opção
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
