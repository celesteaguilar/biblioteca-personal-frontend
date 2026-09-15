// Datos ficticios del dominio de la biblioteca personal
const bibliotecaData = {
  libros: [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: true },
    { id: 2, titulo: "1984", autor: "George Orwell", leido: false },
    { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", leido: true }
  ]
};

// Función asíncrona que simula una petición a una API
export async function fetchMock(recurso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bibliotecaData[recurso] || []);
    }, 400); // simula un pequeño retraso de red
  });
}