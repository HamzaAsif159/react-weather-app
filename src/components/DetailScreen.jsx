import React from "react"
import DetailBox from "./DeatilsBox"

export default function DetailScreen(props) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-bold text-center mx-10 my-10">
        Today Overview
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
          figure={props.wind}
        />
      </div>
      <div className="mx-auto my-0 bg-primary text-offwhite text-center w-6/12 rounded-lg mt-10 h-60 ">
        <h1 className=" font-semibold text-2xl uppercase  px-12 py-6">
          Feels like?
        </h1>
        <p>Temp normally is but feel like blahblah </p>
      </div>
    </div>
  )
}
