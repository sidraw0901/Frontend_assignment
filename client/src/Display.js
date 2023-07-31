import React from 'react'
import { useLocation } from 'react-router-dom'; 

export default function Display() {
    const location = useLocation()
    if(location.state.data.status === "NOT_FOUND"){
        return (
            <h1> Sorry, you entered wrong details , "Try again "  </h1>
        )
    }
else
  return (
    <div>

      <h1> Yours searched stock details -  </h1>
      {/* <h1>{location.state.data.symbol}</h1> */}
      <div className="card" >
  <ul className="list-group list-group-flush">
    <li className="list-group-item">open : {location.state.data.open}</li>
    <li className="list-group-item">high : {location.state.data.high}</li>
    <li className="list-group-item">low : {location.state.data.low}</li>
    <li className="list-group-item">close : {location.state.data.close}</li>
    <li className="list-group-item">volume : {location.state.data.volume}</li>
  </ul>
</div>
    </div>

  )
}
