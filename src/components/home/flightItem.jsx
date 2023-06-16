import React from 'react'

export default function FlightItem(props) {
  return (
    <>
    {console.log(props)}
      <div>item {props.item.boarding}</div>
    </>
  )
}
