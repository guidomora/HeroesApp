
import { heroes } from '../Data/heroes'

export  const getHeroById = (id) => {

    // El método find() devuelve el valor del primer elemento del array 
    // que cumple la función de prueba proporcionada.
    // Si no existe regresa undefined
    // Esto retorna toda la info de los heroes

  return heroes.find(hero => hero.id === id)
}

