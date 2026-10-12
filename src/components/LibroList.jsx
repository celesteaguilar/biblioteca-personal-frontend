import { fetchMock } from "../services/mock";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";
import { filtrarLibros } from "../utils/libros";

function LibroList() {
  const { data: libros, loading, error, recargar } = useFetch(fetchMock, "libros");
  const { valores, handleChange } = useForm({ busqueda: "" });

  if (loading) return <p>Cargando libros...</p>;

  if (error) {
    return (
      <p>
        Error: {error} <button onClick={recargar}>Reintentar</button>
      </p>
    );
  }

  const librosFiltrados = filtrarLibros(libros, valores.busqueda);

  return (
    <div>
      <input
        type="text"
        name="busqueda"
        placeholder="Buscar por título o autor..."
        value={valores.busqueda}
        onChange={handleChange}
      />
      <ul>
        {librosFiltrados.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} — {libro.autor} {libro.leido ? "✅" : "📖"}
          </li>
        ))}
      </ul>
      {librosFiltrados.length === 0 && <p>No se encontraron libros.</p>}
    </div>
  );
}

export default LibroList;