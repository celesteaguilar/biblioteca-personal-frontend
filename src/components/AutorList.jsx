import { fetchMock } from "../services/mock";
import { useFetch } from "../hooks/useFetch";

function AutorList() {
  const { data: autores, loading, error, recargar } = useFetch(fetchMock, "autores");

  if (loading) return <p>Cargando autores...</p>;

  if (error) {
    return (
      <p>
        Error: {error} <button onClick={recargar}>Reintentar</button>
      </p>
    );
  }

  return (
    <div>
      <h2>Autores</h2>
      <ul>
        {autores.map((autor) => (
          <li key={autor.id}>
            {autor.nombre} ({autor.pais})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutorList;