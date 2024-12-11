import { useEffect } from "react"
import { CardCountry } from "./CardCountry"
import { getCountris } from "../apis/getCountris"
import { useState } from "react"
import { getCountryByRegion } from "../apis/getCountryByRegion"
import { getCountryByName } from "../apis/getCountryByName"

export const Main = ({ nameRegion, nameCountry }) => {

    const [countrys, setCountrys] = useState([])

    useEffect(() => {
        getCountris().then(data => {
            setCountrys(data)

        })
    }, [])

    useEffect(() => {
        if (nameRegion === "") return

        getCountryByRegion(nameRegion).then(data => {
            setCountrys(data)

        })


    }, [nameRegion])

    useEffect(() => {
        if (nameCountry === "") return;

        getCountryByName(nameCountry).then(data => {
            setCountrys(data)
        }).catch(err => {
            console.log("nombre no encontrado")
        })
    }, [nameCountry])


    return (
        <section className="grid  max-w-[90%]  mx-auto mt-4 gap-4 tablet:gap-7 tablet:grid-cols-2 laptop:grid-cols-4">
            {
                countrys.map(country => {

                    return <CardCountry key={country.id} country={country} />
                })

            }


        </section>
    )
}