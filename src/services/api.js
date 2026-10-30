import axios from "axios"

// La URL base viene de la variable de entorno VITE_API_URL (archivo .env),
// nunca se escribe directamente en el codigo.
const cliente = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Misma forma que fetchMock(recurso), asi useFetch puede usar cualquiera de las dos.
// Pide la lista del recurso a la API de Django, por ejemplo GET /api/autores/
export async function fetchApi(recurso) {
  try {
    const respuesta = await cliente.get("/" + recurso + "/")
    return respuesta.data
  } catch (err) {
    if (err.response) {
      throw new Error("El servidor respondi\u00f3 con el error " + err.response.status)
    }
    throw new Error("No se pudo conectar con el servidor. \u00bfEst\u00e1 encendido el backend?")
  }
}