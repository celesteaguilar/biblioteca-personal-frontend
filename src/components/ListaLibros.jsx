import TarjetaLibro from './TarjetaLibro'

function ListaLibros({ libros, onVerDetalle, onToggleLeido }) {
  if (libros.length === 0) {
    return <p className="lista-vacia">No hay libros que coincidan con el filtro.</p>
  }

  return (
    <div className="lista-libros">
      {libros.map((libro) => (
        <TarjetaLibro
          key={libro.id}
          libro={libro}
          onVerDetalle={onVerDetalle}
          onToggleLeido={onToggleLeido}
        />
      ))}
    </div>
  )
}

export default ListaLibros
