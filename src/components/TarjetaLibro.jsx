function TarjetaLibro({ libro, onVerDetalle, onToggleLeido }) {
  return (
    <div className="tarjeta-libro">
      <h3 onClick={() => onVerDetalle(libro.id)} className="tarjeta-libro-titulo">
        {libro.titulo}
      </h3>
      <p className="tarjeta-libro-autor">{libro.autor}</p>
      <label className="tarjeta-libro-estado">
        <input
          type="checkbox"
          checked={libro.leido}
          onChange={() => onToggleLeido(libro.id)}
        />
        {libro.leido ? 'Leído' : 'Pendiente'}
      </label>
    </div>
  )
}

export default TarjetaLibro
