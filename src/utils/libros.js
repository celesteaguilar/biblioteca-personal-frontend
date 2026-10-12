export function filtrarLibros(libros, texto) {
  const q = texto.trim().toLowerCase();
  if (!q) return libros;
  return libros.filter(
    (l) =>
      l.titulo.toLowerCase().includes(q) ||
      l.autor.toLowerCase().includes(q)
  );
}