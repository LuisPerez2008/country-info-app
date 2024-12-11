


export const Filter = ({ handleChange }) => {


    return (
        <div className=" ">

            <select
                name="" id="region-select"
                className='px-4 h-14 py-2  rounded-md shadow-[1px_0px_29px_17px_rgba(0,_0,_0,_0.1)]  text-veryDarkBlueText cursor-pointer bg-veryLightGray dark:bg-darkBlue dark:text-white'
                onChange={handleChange}
                defaultValue=""
            >
                <option value="" disabled >Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="americas">America</option>
                <option value="oceania">Oceania</option>


            </select>


        </div>
    )
}