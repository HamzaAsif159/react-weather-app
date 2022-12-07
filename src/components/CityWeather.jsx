import React from "react"
import SunTime from "./SunTime"
import timeFormat from "../../utils/FormatTime"

export default function CityWeather(props) {
  return (
    <div className="mx-auto my-0 bg-primary text-offwhite text-center p-6  h-72 md:h-60 md:rounded-lg md:w-6/12 md:mt-10 6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-left">{props.city}</h1>
        <h1 className="text-3xl font-bold">{props.temp}° C</h1>
      </div>
      <SunTime sunrise={timeFormat(props.sunrise)} />
      <SunTime sunset={timeFormat(props.sunset)} />
      <p className="mt-10 md:mt-3">
        Temperature feels like{" "}
        <span className="font-bold">{Math.ceil(props.feelsLike)}° C</span>
      </p>
    </div>
  )
}
