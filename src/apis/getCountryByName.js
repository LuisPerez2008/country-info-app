import { v4 as uuidv4 } from "uuid";

export const getCountryByName = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
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
        const languages = country.languages ? country.languages : {};
        const tld = country.tld;
        const currencies = country.currencies ? country.currencies : {};
        const borders = country.borders ? country.borders : [];
        return {
            id,
            name,
            capital,
            region,
            subregion,
            googleMaps,
            population,
            img,
            languages,
            tld,
            currencies,
            borders,
        };
    });
    return country;
};
