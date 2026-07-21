import './ExibeEventos.css';

import { Temas } from '../Temas/Temas.jsx';
import { CardEvento } from './CardEvento.jsx';

import { listTemas } from '../../utils/listTemas.js';

export function ExibeEventos({ eventos }) {
  return (
    <div className='container-eventos'>
      {listTemas.map(function (tema) {
        const eventosDoTema = eventos.filter(function (evento) {
          return evento.tema === tema.nome;
        });
        if (eventosDoTema.length === 0) {
          return null;
        }
        return (
          <section key={tema.id} className='section-eventos'>
            <Temas tema={tema} />
            <div className='cards-eventos'>
              {eventos
                .filter(function (evento) {
                  return evento.tema === tema.nome;
                })
                .map(function (evento) {
                  return <CardEvento evento={evento} key={evento.titulo} />;
                })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
