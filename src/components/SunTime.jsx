import React from "react"

export default function SunTime(props) {
  return (
    <div className="bg-lightblue text-offwhite mt-4">
      {props.sunrise && (
        <p className="border border-border-800 p-2 rounded-lg">
          Sunrise at {props.sunrise}
        </p>
      )}
      {props.sunset && (
        <p className="border border-border-800 p-2 rounded-lg ">
          Sunset at {props.sunset}
        </p>
      )}
    </div>
  )
}
