import { useState } from 'react'

function FormularioLibro({ onAgregarLibro }) {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [error, setError] = useState('')

  function manejarEnvio(e) {
    e.preventDefault()

    if (titulo.trim() === '' || autor.trim() === '') {
      setError('Título y autor son obligatorios.')
      return
    }

    onAgregarLibro({ titulo: titulo.trim(), autor: autor.trim(), leido: false })
    setTitulo('')
    setAutor('')
    setError('')
  }

  return (
    <form className="formulario-libro" onSubmit={manejarEnvio}>
      <h3>Agregar libro</h3>

      <label>
        Título
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>

      <label>
        Autor
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </label>

      {error && <p className="formulario-error">{error}</p>}

      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormularioLibro
