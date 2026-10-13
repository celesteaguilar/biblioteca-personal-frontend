# Biblioteca Personal - Frontend (React + Vite)

Aplicación web Full-Stack desarrollada para la asignatura **Herramientas Avanzadas para el Desarrollo de Aplicaciones**.

## Repositorio relacionado

Este frontend consume la API REST desarrollada en Django:
[biblioteca-personal-backend](https://github.com/celesteaguilar/biblioteca-personal-backend)

## Integrantes

* María Celeste Hernández Aguilar (#0700923)
* Marcela Saraí Ramírez Caceres (#0700424)

## Instalación y uso

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173` en el navegador. El backend corre por separado en `http://127.0.0.1:8000` (ver el repositorio relacionado). Por ahora el frontend usa datos simulados con `fetchMock`; la conexión con la API real se hará en la Sesión 11.

## Sesión 2 - Estructura Inicial

* Inicialización del proyecto con React y Vite.
* Configuración del directorio base `src/` con carpetas para componentes, servicios, hooks y utilidades.

## Flujo de Trabajo y Convenciones (Sesión 3)

### Ramas

* `main`: Rama principal y estable. Protegida contra pushes directos.
* `feature/<nombre>` o `feat/<nombre>`: Ramas creadas para desarrollar nuevas características o mejoras.
* `fix/<nombre>`: Ramas para corrección de errores.
* `docs/<nombre>`: Ramas para cambios en la documentación.
* `chore/<nombre>`: Ramas para tareas de mantenimiento (por ejemplo, limpieza de archivos).

### Convención de Commits

* `feat:` para nuevas funcionalidades.
* `fix:` para corrección de errores.
* `docs:` para cambios o actualización en la documentación (`README.md`).
* `refactor:` para reorganizar código sin cambiar su comportamiento.
* `chore:` para tareas de mantenimiento.

Todo cambio entra a `main` mediante Pull Request revisado por otro integrante del equipo.

## Sesión 5 - Eventos y Mock de API

* Creación del archivo `services/mock.js` con la función `fetchMock(recurso)`.
* Datos ficticios del dominio (libros) para simular una API mientras no está conectado el backend real.

## Sesión 7 - Interfaz con Estado Local

* Creación de componentes React: `ListaLibros`, `TarjetaLibro`, `FiltroLibros`, `FormularioLibro` y `DetalleLibro`.
* Consumo de `fetchMock` para manejar estado funcional y datos de prueba (en la Sesión 9 este manejo se movió al custom hook `useFetch`).
* Formulario controlado (`FormularioLibro`) para agregar libros nuevos, con validación básica de campos obligatorios.
* Lista con filtrado (`FiltroLibros`): búsqueda por título y filtro por estado de lectura (todos / leídos / pendientes).
* Pantalla de detalle (`DetalleLibro`) al seleccionar un libro de la lista.

## Sesión 9 - Modularización Frontend / Backend

### Frontend

**Custom hooks (`src/hooks/`)**

| Hook | Qué hace | Dónde se usa |
|---|---|---|
| `useFetch(fetchFn, recurso)` | Maneja los tres estados de una petición: cargando, datos y error. Devuelve `data`, `setData`, `loading`, `error` y `recargar`. | `App` y `AutorList` |
| `useForm(valoresIniciales)` | Maneja formularios controlados. Devuelve `valores`, `handleChange`, `reset` y `setValores`. | `FormularioLibro` |

**Utilidad (`src/utils/`)**

* `filtrarLibros(libros, texto)`: filtra la lista de libros por título o autor, sin distinguir mayúsculas. Se usa en `App` junto con el filtro por estado.

**Otros cambios**

* Nuevo componente `AutorList`, que muestra la lista de autores y reutiliza `useFetch`.
* Se agregó el recurso `autores` a `services/mock.js`.
* `App` ahora obtiene los libros con `useFetch` en lugar de `useState` y `useEffect` manuales.
* `FormularioLibro` ahora usa `useForm` en lugar de un `useState` por campo.
* Se eliminaron los componentes duplicados `LibroList` y `LibroForm`, que habían quedado sin uso.

### Flujo de trabajo en esta sesión

* Ramas por funcionalidad: `feat/custom-hook-usefetch`, `feat/useform-formulario` y `chore/eliminar-duplicados`.
* Pull Requests revisados y aprobados por la otra integrante del equipo.
* Se resolvió un conflicto de merge en `App.jsx`, conservando el trabajo de la Sesión 7 e integrando los hooks.