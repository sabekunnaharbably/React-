import React from 'react'

const Heading = (props) => {
  return (
    <h1 className="bg-red-700 py-20 text-center text-white text-4xl font-bold">{props.txt}</h1>
  )
}

export default Heading