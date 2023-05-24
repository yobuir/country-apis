 import "./Card.css"
import { Link } from 'react-router-dom';

 
const Card  = (props: any) => {  
  return (
      <Link to={`/country-details/${props?.countries?.name}`}>
        <div className='card'>
          <div className="card-image">
            <img src={props?.countries?.flag}/>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h2>{props?.countries?.name}</h2>
            </div>
            <div className="card-desc">
                <p><strong>Population</strong>: {props?.countries?.population}</p>
                <p><strong>Region</strong>: {props?.countries?.region}</p>
                <p><strong>Capital</strong>: {props?.countries?.capital}</p>
            </div>
          </div>
        </div>
        </Link>
  )
}

export default Card