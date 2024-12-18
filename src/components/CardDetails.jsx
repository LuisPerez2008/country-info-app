import { useLocation, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getCountryByCod } from "../apis/getCountryByCod";
import { getCountryByName } from "../apis/getCountryByName";

export const CardDetails = () => {


    const { name: countryName } = useParams();

    const [country, setCountry] = useState(null)
    const [border, setBorder] = useState([])
    const [loading, setLoading] = useState(true)




    const capitals = country?.capital;
    const currencyNames = country?.currencies ? Object.values(country.currencies) : [];
    const lenguajes = country?.languages ? Object.values(country.languages) : [];
    const localString = country?.population.toLocaleString('en')

    useEffect(() => {
        if (countryName === "") return;
        getCountryByName(countryName).then(data => {
            setCountry(data[0])
            setLoading(false)
        })
    }, [countryName])



    useEffect(() => {

        if (!country?.borders?.length) return;

        const fetchBorders = async () => {
            const bordersNames = await Promise.all(
                country.borders.map(async (border) => {
                    const data = await getCountryByCod(border);
                    return data[0].name
                })
            )
            setBorder(bordersNames)
            setLoading(false)
        }

        fetchBorders();

    }, [country])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="max-w-[90%] mx-auto tablet:max-w-[90%] mt-4 h-[calc(100vh-100px)]  ">
            <Link to="/" className="flex my-8 cursor-pointer items-center dark:text-white  bg-veryLightGray dark:bg-darkBlue w-[100px] space-x-4 px-4 py-1 text-veryDarkBlueText shadow-[1px_0px_29px_17px_rgba(0,_0,_0,_0.1)] dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-slate-600 hover:text-white group">
                <FaArrowLeft className="w-4 fill-black dark:fill-white group-hover:fill-white dark:group-hover:fill-black" />
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
                    <article className="flex flex-wrap gap-2 ">
                        {
                            border.length === 0 ? "no tiene" : border.map((border, index) => (
                                <Link to={`/country/${border}`} key={index} className="text-sm rounded-sm shadow-[1px_15px_35px_17px_rgba(0,_0,_0,_0.1)] bg-veryLightGray dark:bg-darkBlue px-4 py-1 h-[30px] dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-slate-600 hover:text-white">
                                    {border}
                                </Link>
                            ))
                        }
                    </article>
                </div>
            </div>

        </section>


    )
}