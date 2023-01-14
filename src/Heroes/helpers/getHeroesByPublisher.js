import { heroes } from "../Data/heroes";

// Si el publisher es incorrecto lanza un error, sino retorna a los heroes fltrados
// segun el publisher indicado

export const getHeroesByPublisher = (publisher) =>{
    const validPublishers = ["DC Comics", "Marvel Comics"]
    if (!validPublishers.includes(publisher)) {
        throw new Error (`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher )
}