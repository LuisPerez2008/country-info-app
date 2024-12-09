import { Link } from "react-router"

export const CardCountry = ({ country }) => {
    const localString = country.population.toLocaleString('en')
    return (
        <Link to={`/country/${country.id}`} className="bg-veryLightGray w-full max-w-[80%] mx-auto tablet:max-w-[90%] rounded-md shadow-[1px_0px_29px_17px_rgba(0,_0,_0,_0.1)] ">
            <figure className="w-full h-[200px] aspect-video" >
                <img src={country.img} alt="" className="rounded-md w-full h-full" />
            </figure>
            <div className="flex flex-col justify-between px-6 py-6 ">
                <h2 className="font-bold text-md mb-2 text-xl">{country.name}</h2>
                <p className="font-bold">Poblation: <span className="text-sm font-normal"> {localString}</span></p>
                <p className="font-bold">Region:<span className="text-sm font-normal"> {country.region}</span> </p>
                <p className="font-bold">Capital:<span className="text-sm font-normal"> {country.capital}</span> </p>
            </div>
        </Link>
    )
}