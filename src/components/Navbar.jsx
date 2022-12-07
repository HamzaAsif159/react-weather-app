import { React, useState } from "react"

export default function NavBar(props) {
  return (
    <nav className="flex items-center justify-between bg-secondary py-4 px-4">
      <h1 className="text-2xl font-semibold uppercase text-offwhite">
        WeatherBug
      </h1>
      <form>
        <input
          type="text"
          onChange={(e) => props.handleChange(e.target.value)}
          value={props.value}
          placeholder="Search city"
          className="bg-smoke px-2 py-2 rounded-md"
          required
        />
        <button
          className="text-primary bg-smoke px-4 py-2 ml-4 rounded-md"
          onClick={(e) => props.handleClick(e)}
        >
          Search
        </button>
      </form>
    </nav>
  )
}
