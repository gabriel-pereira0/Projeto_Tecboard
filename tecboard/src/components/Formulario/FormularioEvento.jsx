import React from 'react';
import './FormularioEvento.css';

import { Inputs } from './Inputs';
import { ListaSuspensa } from './ListaSuspensa';
import { Botao } from '../Botao/Botao';

import { listTemas } from '../../utils/listTemas';
import { listEventos } from '../../utils/listEventos';

export function FormularioEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    const temaSelecionado = listTemas.find(function (item) {
      return item.id === Number(formData.get('tema'));
    });

    const evento = {
      capa: formData.get('capa'),
      tema: temaSelecionado?.nome,
      data: new Date(formData.get('dataEvento') + 'T00:00:00'),
      titulo: formData.get('nomeEvento'),
      descricao: formData.get('descricao'),
    };

    aoSubmeter(evento);
  }

  return (
    <div className='container-form'>
      <form className='form-evento' action={aoFormSubmetido}>
        <h2 className='titulo-form'>Preencha para criar um evento:</h2>
        <div className='inputs-form'>
          <label htmlFor='nome' className='label-nome'>
            Qual o nome do evento?
          </label>
          <Inputs
            id='nomeEvento'
            name='nomeEvento'
            labelClassName='label-nome'
            placeholder='Summer dev hits'
          />
          <label htmlFor='url' className='label-url'>
            Qual a descrição do evento?
          </label>
          <Inputs
            id='url'
            name='descricao'
            labelClassName='label-url'
            placeholder='Performance e inovação'
          />
          <label htmlFor='url' className='label-url'>
            Qual o endereço da imagem de capa?
          </label>
          <Inputs
            id='url'
            name='capa'
            labelClassName='label-url'
            placeholder='http://....'
          />
          <label htmlFor='date'>Data do evento</label>
          <Inputs
            className='input-date'
            name='dataEvento'
            id='date'
            type='date'
            placeholder='XX/XX/XXXX'
          />
          <label htmlFor='tema'>Tema do evento</label>
          <ListaSuspensa
            className='lista-suspensa'
            name='tema'
            itens={listTemas}
          />
        </div>
        <Botao className='btn-form' type='submit'>
          Criar Evento
        </Botao>
      </form>
    </div>
  );
}
