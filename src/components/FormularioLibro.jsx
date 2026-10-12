import { useState } from 'react'
import { useForm } from '../hooks/useForm'

function FormularioLibro({ onAgregarLibro }) {
  const { valores, handleChange, reset } = useForm({ titulo: '', autor: '' })
  const [error, setError] = useState('')

  function manejarEnvio(e) {
    e.preventDefault()

    if (valores.titulo.trim() === '' || valores.autor.trim() === '') {
      setError('Título y autor son obligatorios.')
      return
    }

    onAgregarLibro({
      titulo: valores.titulo.trim(),
      autor: valores.autor.trim(),
      leido: false,
    })
    reset()
    setError('')
  }

  return (
    <form className="formulario-libro" onSubmit={manejarEnvio}>
      <h3>Agregar libro</h3>

      <label>
        Título
        <input
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
      </label>

      <label>
        Autor
        <input
          type="text"
          name="autor"
          value={valores.autor}
          onChange={handleChange}
        />
      </label>

      {error && <p className="formulario-error">{error}</p>}

      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormularioLibro