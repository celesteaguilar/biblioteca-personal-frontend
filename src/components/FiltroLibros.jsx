function FiltroLibros({ filtroEstado, onCambiarEstado, textoBusqueda, onCambiarBusqueda }) {
  return (
    <div className="filtro-libros">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={textoBusqueda}
        onChange={(e) => onCambiarBusqueda(e.target.value)}
      />

      <select value={filtroEstado} onChange={(e) => onCambiarEstado(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="leidos">Leídos</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  )
}

export default FiltroLibros
