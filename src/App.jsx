import { useState, useEffect } from 'react'
import { fetchMock } from './services/mock'
import ListaLibros from './components/ListaLibros'
import FiltroLibros from './components/FiltroLibros'
import FormularioLibro from './components/FormularioLibro'
import DetalleLibro from './components/DetalleLibro'
import './App.css'

function App() {
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [textoBusqueda, setTextoBusqueda] = useState('')
  const [idSeleccionado, setIdSeleccionado] = useState(null)

  useEffect(() => {
    fetchMock('libros')
      .then((datos) => {
        setLibros(datos)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  function manejarToggleLeido(id) {
    setLibros((prev) =>
      prev.map((libro) =>
        libro.id === id ? { ...libro, leido: !libro.leido } : libro
      )
    )
  }

  function manejarAgregarLibro(nuevoLibro) {
    setLibros((prev) => [
      ...prev,
      { ...nuevoLibro, id: prev.length > 0 ? Math.max(...prev.map((l) => l.id)) + 1 : 1 },
    ])
  }

  const librosFiltrados = libros.filter((libro) => {
    const coincideEstado =
      filtroEstado === 'todos' ||
      (filtroEstado === 'leidos' && libro.leido) ||
      (filtroEstado === 'pendientes' && !libro.leido)

    const coincideBusqueda = libro.titulo
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase())

    return coincideEstado && coincideBusqueda
  })

  const libroSeleccionado = libros.find((libro) => libro.id === idSeleccionado)

  return (
    <div className="app">
      <h1>Biblioteca Personal de Libros</h1>
      <p>Proyecto integrador — Herramientas Avanzadas para el Desarrollo de Aplicaciones (102HAD1)</p>

      {cargando && <p className="estado-carga">Cargando libros...</p>}
      {error && <p className="estado-error">Ocurrió un error: {error}</p>}

      {!cargando && !error && (
        <>
          <FiltroLibros
            filtroEstado={filtroEstado}
            onCambiarEstado={setFiltroEstado}
            textoBusqueda={textoBusqueda}
            onCambiarBusqueda={setTextoBusqueda}
          />

          <ListaLibros
            libros={librosFiltrados}
            onVerDetalle={setIdSeleccionado}
            onToggleLeido={manejarToggleLeido}
          />

          <FormularioLibro onAgregarLibro={manejarAgregarLibro} />

          <DetalleLibro
            libro={libroSeleccionado}
            onCerrar={() => setIdSeleccionado(null)}
          />
        </>
      )}
    </div>
  )
}

export default App
