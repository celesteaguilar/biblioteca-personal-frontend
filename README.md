# Biblioteca Personal - Frontend (React + Vite)

Aplicación web Full-Stack desarrollada para la asignatura **Herramientas Avanzadas para el Desarrollo de Aplicaciones**.

## Repositorio relacionado

Este frontend consume la API REST desarrollada en Django:
[biblioteca-personal-backend](https://github.com/celesteaguilar/biblioteca-personal-backend)

## Integrantes

* María Celeste Hernández Aguilar (#0700923)
* Marcela Saraí Ramírez Caceres (#0700424)

## Sesión 2 - Estructura Inicial

* Inicialización del proyecto con React y Vite.
* Configuración del directorio base `src/` con carpetas para componentes, servicios, hooks y utilidades.

## Flujo de Trabajo y Convenciones (Sesión 3)

### Ramas

* `main`: Rama principal y estable. Protegida contra pushes directos.
* `feature/<nombre>`: Ramas creadas para desarrollar nuevas características o mejoras.
* `fix/<nombre>`: Ramas para corrección de errores.

### Convención de Commits

* `feat:` para nuevas funcionalidades.
* `fix:` para corrección de errores.
* `docs:` para cambios o actualización en la documentación (`README.md`).

## Sesión 5 - Eventos y Mock de API

* Creación del archivo `services/mock.js` con la función `fetchMock(recurso)`.
* Datos ficticios del dominio (libros) para simular una API mientras no está conectado el backend real.

## Sesión 7 - Interfaz con Estado Local

* Creación de componentes React: `ListaLibros`, `TarjetaLibro`, `FiltroLibros`, `FormularioLibro` y `DetalleLibro`.
* Consumo de `fetchMock` mediante `useState` y `useEffect` para manejar estado funcional y datos de prueba.
* Formulario controlado (`FormularioLibro`) para agregar libros nuevos, con validación básica de campos obligatorios.
* Lista con filtrado (`FiltroLibros`): búsqueda por título y filtro por estado de lectura (todos / leídos / pendientes).
* Pantalla de detalle (`DetalleLibro`) al seleccionar un libro de la lista.