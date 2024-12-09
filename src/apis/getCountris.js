import { v4 as uuidv4 } from "uuid";

export const getCountris = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const country = data.map((country) => {
        const id = uuidv4();
        const name = country.name.common;
        const googleMaps = country.maps.googleMaps;
        const capital = country.capital;
        const region = country.region;
        const population = country.population;
        const subregion = country.subregion ? country.subregion : "no tiene";
        const img = country.flags.png;
        const lenguages = country.lenguages;
        const tld = country.tld;
        return {
            id,
            name,
            capital,
            region,
            subregion,
            googleMaps,
            population,
            img,
        };
    });
    return country;
};
