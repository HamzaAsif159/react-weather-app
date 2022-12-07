import React from "react"

export default function DetailBox(props) {
  return (
    <div className="relative bg-smoke w-96 p-6 text-center">
      <h1 className=" text-gray font-semibold">{props.figureHead}</h1>
      <h3 className="text-primary font-bold text-xl">{props.figure} </h3>
      <img
        src={props.src}
        alt="icon"
        className="absolute w-10 top-6 left-5"
      ></img>
    </div>
  )
}
