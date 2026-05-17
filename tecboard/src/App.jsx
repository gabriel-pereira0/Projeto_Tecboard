import React, { useState } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { FormularioEvento } from './components/Formulario/FormularioEvento';
import { Banner } from './components/Banner/Banner';
import { Temas } from './components/Temas/Temas.jsx';
import { CardEvento } from './components/CardEvento/CardEvento.jsx';
import { ExibeEventos } from './components/CardEvento/ExibeEventos.jsx';

import { listTemas } from './utils/listTemas.js';
import { listEventos } from './utils/listEventos.js';

function App() {
  const [eventos, setEventos] = useState(listEventos);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <Header />
      <main className='app-container'>
        <Banner />
        <FormularioEvento temas={listTemas} aoSubmeter={adicionarEvento} />
        <ExibeEventos eventos={eventos} />
      </main>
    </>
  );
}

export default App;
