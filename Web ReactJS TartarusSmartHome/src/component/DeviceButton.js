import React from 'react'
import { Link } from 'react-router-dom';

export default function DeviceButton({props}) {
 
  console.log(props);
  return (
    <Link to={`/device/${props.idDevice}`}>
      <div className="card" style={{ width: '18rem',backgroundColor:'lightGray',borderRadius:'5px',padding:'10px',border:'solid black 1px' }}>
      <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/720px-Arduino_Logo.svg.png" alt="Card image cap" style={{height:'200px',width:'250px'}} />
      <div className="card-body">
        <div className="card-text">
          <div> id device = {props.idDevice}</div>
          <div> name      = {props.name}</div>
          <div> type      = {props.type}</div>
        </div>
      </div>
    </div>
  </Link>
  )
}
