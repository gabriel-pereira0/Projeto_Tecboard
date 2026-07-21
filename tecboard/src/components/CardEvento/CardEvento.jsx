import './CardEvento.css';

export function CardEvento({ evento }) {
  const imagemPadrao =
    'https://placehold.co/282x237/1f2937/ffffff?text=Sem+Imagem';
  return (
    <div className='card-evento'>
      <img
        className='imagem-evento'
        src={evento.capa?.trim() || imagemPadrao}
        alt={evento.titulo}
        onError={(e) => {
          e.target.src = imagemPadrao;
        }}
      />
      <div className='info-evento'>
        <p className='tag-evento'>{evento.tema}</p>
        <p className='data'>
          {new Date(evento.data).toLocaleDateString('pt-BR')}
        </p>
        <h4 className='titulo'>{evento.titulo}</h4>
        <p className='descricao-evento'>{evento.descricao}</p>
      </div>
    </div>
  );
}
