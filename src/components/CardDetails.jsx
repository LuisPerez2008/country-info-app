import { useLocation } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { Container } from "postcss";
import { useEffect, useState } from "react";
import { getCountryByCod } from "../apis/getCountryByCod";

export const CardDetails = () => {

    const location = useLocation();
    const { country } = location.state || {};
    const capitals = country.capital;

    const currencyNames = Object.values(country.currencies);
    const lenguajes = Object.values(country.languages);
    const localString = country.population.toLocaleString('en')

    const [border, setBorder] = useState([])




    useEffect(() => {
        if (country.borders.length === 0) return;

        const fetchBorders = async () => {
            const bordersNames = await Promise.all(
                country.borders.map(async (border) => {
                    const data = await getCountryByCod(border);
                    return data[0].name
                })
            )
            setBorder(bordersNames)
        }

        fetchBorders();

    }, [])

    return (
        <section className="max-w-[90%] mx-auto tablet:max-w-[90%] mt-4 h-screen  ">
            <Link to="/" className="flex my-8 cursor-pointer items-center dark:text-white  bg-veryLightGray dark:bg-darkBlue w-[100px] space-x-4 px-4 py-1 text-veryDarkBlueText shadow-[1px_0px_29px_17px_rgba(0,_0,_0,_0.1)]">
                <FaArrowLeft className="w-4 fill-black dark:fill-white" />
                <span className="text-sm">Back</span>
            </Link>
            <div className=" w-full grid tablet:grid-cols-2 tablet:grid-rows-[auto_auto] tablet:space-x-6"  >
                <figure className="w-full h-[200px] aspect-video tablet:row-span-2 tablet:w-[85%] tablet:h-[100%] " >
                    <img src={country.img} alt="" className=" w-full h-full" />
                </figure>
                <div className=" flex-col flex py-6 space-y-6 tablet:flex-row tablet:space-x-4  laptop:space-x-32">
                    <div>
                        <h2 className="font-bold text-md mb-2 text-xl">{country.name}</h2>
                        <a href={country.googleMaps} target="_blank" className="font-bold cursor-pointer after:content-['🌍'] after:ml-1 after:text-xl">Ubicacion:</a>
                        <p className="font-bold">Poblation: <span className="text-sm font-normal"> {localString}</span></p>
                        <p className="font-bold">Region:<span className="text-sm font-normal"> {country.region}</span> </p>
                        <p className="font-bold">Sub Region:<span className="text-sm font-normal"> {country.subregion}</span> </p>
                        <p className="font-bold">Capital:

                            {Array.isArray(capitals)
                                ? capitals.map((cap, index) => (
                                    <span key={index} className="text-sm font-normal ml-1">
                                        {cap}{index < capitals.length - 1 ? ', ' : ' '}
                                    </span>
                                ))
                                : " no tiene "
                            }
                        </p>
                    </div>

                    <div className="tablet:">
                        <p className="font-bold">Top Level Domain: <span className="text-sm font-normal"> {country.tld}</span></p>
                        <p className="font-bold">Currenci:<span className="text-sm font-normal"> {currencyNames[0].name}</span> </p>
                        <p className="font-bold">Lenguaje/s :
                            {
                                Array.isArray(lenguajes) ? lenguajes.map((lang, index) => (
                                    <span key={index} className="text-sm font-normal ml-1">
                                        {lang}{index < lenguajes.length - 1 ? ', ' : ' '}
                                    </span>
                                )) : " no tiene "
                            } </p>

                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row tablet:space-x-4">
                    <h3 className="font-bold">Border Countries: </h3>
                    <div className="flex flex-wrap gap-2 ">
                        {
                            border.length === 0 ? "no tiene" : border.map((border, index) => (
                                <span key={index} className="text-sm rounded-sm shadow-[1px_15px_35px_17px_rgba(0,_0,_0,_0.1)] bg-veryLightGray dark:bg-darkBlue px-4 py-1 h-[30px] ">
                                    {border}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>


    )
}