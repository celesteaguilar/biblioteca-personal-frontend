import { useForm } from "../hooks/useForm";

function LibroForm({ onAgregar }) {
  const { valores, handleChange, reset } = useForm({ titulo: "", autor: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valores.titulo.trim() || !valores.autor.trim()) return;
    onAgregar({ ...valores, leido: false });
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar libro</h2>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={valores.titulo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="autor"
        placeholder="Autor"
        value={valores.autor}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default LibroForm;