import React from 'react'
import image from "../../assets/react.svg"
import "./Card.css"
import { Link } from 'react-router-dom';
function Card(  ) {
  return (
      <Link to={`/country-details/rwanda`}>
        <div className='card'>
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/255px-Flag_of_Rwanda.svg.png"/>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h2>Rwanda</h2>
            </div>
            <div className="card-desc">
                <p><strong>Population</strong>: 12,000,000</p>
                <p><strong>Region</strong>: Africa</p>
                <p><strong>Capital</strong>: Kigali</p>
            </div>
          </div>
        </div>
        </Link>
  )
}

export default Card