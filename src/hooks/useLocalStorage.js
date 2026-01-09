export function useLocalStorage({ opcion, valor }) {
    if (opcion === "guardar") {
        localStorage.setItem("aplicacion",valor)
        return "Guardado"
    }
    if (opcion === "recuperar") {
        return localStorage.getItem("aplicacion")
    }
}