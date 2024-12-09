import { useState } from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Filter } from './components/Filter'
import { Main } from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CardDetails } from './components/CardDetails'

function App() {
  const [nameRegion, setNameRegion] = useState("")
  const [nameCountry, setNameCountry] = useState("")


  const handleChange = (e) => {
    setNameRegion(e.target.value)
  }

  const handleChangeInput = (e) => {
    setNameCountry(e.target.value)

  }

  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path="/" element=
            {
              <>
                <div className='flex flex-col mx-auto max-w-[90%] tablet:flex-row tablet:justify-between tablet:items-center mt-4 '>
                  <Search handleChangeInput={handleChangeInput} />
                  <Filter handleChange={handleChange} />
                </div>

                <Main nameRegion={nameRegion} nameCountry={nameCountry} />
              </>
            }
          />

          <Route path="/country/:id" element={<CardDetails />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
