import { React, useState, useEffect } from "react"
import axios from "axios"
/*local imports */
import NavBar from "./components/Navbar"
import DetailScreen from "./components/DetailScreen"
import CityWeather from "./components/CityWeather"

export default function App() {
  const [location, setLocation] = useState("Lahore")
  const [data, setData] = useState("")
  const [requestState, setRequestState] = useState(false)

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a6853c7595c5c99794891a5975108d4&units=metric`

  function handleChange(value) {
    setLocation(value)
  }

  function handleClick(e) {
    e.preventDefault()
    setRequestState((prevValue) => !prevValue)
  }

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
      <CityWeather
        feelsLike={data.main ? data.main.feels_like : null}
        city={data ? data.name : null}
        temp={data.main ? data.main.temp : null}
        sunrise={data?.sys?.sunrise ? data.sys.sunrise : null}
        sunset={data?.sys?.sunset ? data.sys.sunset : null}
      />
      <DetailScreen
        pressure={data.main ? data.main.pressure : null}
        wind={data.main ? data.wind.speed : null}
        highest={data.main ? data.main.temp_max : null}
        humidity={data.main ? data.main.humidity : null}
        temp={data.main ? data.main.temp : null}
        city={data ? data.name : null}
      />
    </div>
  )
}
