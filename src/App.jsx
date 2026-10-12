import LibroList from "./components/LibroList";
import AutorList from "./components/AutorList";
import LibroForm from "./components/LibroForm";

function App() {
  const handleAgregar = (libro) => {
    console.log("Libro a agregar:", libro);
  };

  return (
    <div>
      <h1>Mi Biblioteca Personal</h1>
      <LibroForm onAgregar={handleAgregar} />
      <LibroList />
      <AutorList />
    </div>
  );
}

export default App;