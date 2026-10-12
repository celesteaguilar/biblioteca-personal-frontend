import { useState } from 'react'
import { fetchMock } from './services/mock'
import { useFetch } from './hooks/useFetch'
import { filtrarLibros } from './utils/libros'
import ListaLibros from './components/ListaLibros'
import FiltroLibros from './components/FiltroLibros'
import FormularioLibro from './components/FormularioLibro'
import DetalleLibro from './components/DetalleLibro'
import AutorList from './components/AutorList'
import './App.css'

function App() {
  const {
    data: libros,
    setData: setLibros,
    loading: cargando,
    error,
  } = useFetch(fetchMock, 'libros')

  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [textoBusqueda, setTextoBusqueda] = useState('')
  const [idSeleccionado, setIdSeleccionado] = useState(null)

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

  const librosFiltrados = filtrarLibros(libros, textoBusqueda).filter((libro) => {
    return (
      filtroEstado === 'todos' ||
      (filtroEstado === 'leidos' && libro.leido) ||
      (filtroEstado === 'pendientes' && !libro.leido)
    )
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

          <AutorList />
        </>
      )}
    </div>
  )
}

export default App