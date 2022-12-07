import { React, useState, useEffect } from "react"
/*local imports */
import NavBar from "./components/Navbar"
import DetailScreen from "./components/DetailScreen"
import axios from "axios"

export default function App() {
  const [location, setLocation] = useState("Lahore")
  const [data, setData] = useState("")
  const [requestState, setRequestState] = useState(false)

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a6853c7595c5c99794891a5975108d4`

  function handleChange(value) {
    console.log(location)
    setLocation(value)
  }
  function handleClick(e) {
    e.preventDefault()
    setRequestState((prevValue) => !prevValue)
  }
  console.log(data)

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data))
    setLocation("")
  }, [requestState])

  return (
    <div>
      <NavBar
        handleChange={handleChange}
        value={location}
        handleClick={handleClick}
      />
      <DetailScreen
        pressure={data.main ? data.main.pressure : null}
        wind={data.main ? data.wind.speed : null}
        highest={data.main ? data.main.temp_max : null}
      />
    </div>
  )
}
