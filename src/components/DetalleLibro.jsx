function DetalleLibro({ libro, onCerrar }) {
  if (!libro) return null

  return (
    <div className="detalle-libro">
      <button className="detalle-libro-cerrar" onClick={onCerrar}>Cerrar</button>
      <h2>{libro.titulo}</h2>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Estado:</strong> {libro.leido ? 'Leído' : 'Pendiente'}</p>
    </div>
  )
}

export default DetalleLibro
