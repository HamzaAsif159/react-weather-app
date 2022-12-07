import React from "react"
import DetailBox from "./DeatilsBox"
import timeFormat from "../../utils/FormatTime"
import CityWeather from "./CityWeather"

export default function DetailScreen(props) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-bold text-center mx-10 my-10">
        Today Overview of {props.city}
      </h1>
      <div className="mx-auto my-0 flex items-center justify-center flex-wrap max-w-screen-lg gap-x-2.5 gap-y-2.5">
        <DetailBox
          figureHead="Wind"
          src="./icons/wind.png"
          figure={props.wind}
        />
        <DetailBox
          figureHead="Highest"
          src="./icons/thermometer.svg"
          figure={props.highest}
        />
        <DetailBox
          figureHead="Pressure"
          src="./icons/pressure.svg"
          figure={props.pressure}
        />
        <DetailBox
          figureHead="Humidity"
          src="./icons/leaves-two.svg"
          figure={props.humidity}
        />
      </div>
    </div>
  )
}
