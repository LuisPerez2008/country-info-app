import { v4 as uuidv4 } from "uuid";

export const getCountryByCod = async (cod) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cod}`);
    const data = await response.json();
    const country = data.map((country) => {
        const id = uuidv4();
        const name = country.name.common;

        return {
            id,
            name,
        };
    });
    return country;
};
