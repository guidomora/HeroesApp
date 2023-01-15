import { heroes } from "../Data/heroes";

// Si no recibimos el name va a ser un string vacio
export const getHeroesByName = (name = "") => {
    name.toLocaleLowerCase().trim()

    if (name.length === 0 ) return[];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )
}