import Navbar from '../components/Navbar' 
import { Link } from 'react-router-dom';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import "./DetailsPage.css"
import { useParams } from 'react-router-dom' 
import data from '../../data/data.json';

function DetailsPage() {
    const name = useParams(); 
  const country = data.find((country) => country.name == name.name); 
   return (
    <div className='container'>  
      <Navbar/> 
      <div className="details">
        <div className="details-header">
          <div className="back">
            <Link to={`/`}><ArrowLeftOutlined /> Back</Link>
            
          </div> 
        </div>
        <div className="detail-body"> 
            <div className="detail-image">
            <img src= {country?.flag}/>

            </div>
            <div className="detail-desc">
              <div className="details-content">
                <div className="detail-desc-title">
                    <h1>{country?.name}</h1>
                </div>
                <div className="detail-desc-body">
                  <div className="left">
                    <p><strong>Native name</strong>: {country?.topLevelDomain}</p>
                    <p><strong>Population</strong>: {country?.population}</p>
                    <p><strong>Region</strong>: {country?.region}</p>
                    <p><strong>Sub region</strong>: {country?.subregion}</p>
                    <p><strong>Capital</strong>: {country?.capital}</p> 
                    
                    </div>
                    <div className="right">
                      <p><strong>Top Level Domain</strong>: {country?.topLevelDomain}</p>
                      <p><strong>Currencies</strong>: {country?.currencies?.map(curr => `${curr.name} , `)}</p>
                      <p><strong>Languages</strong>: {country?.languages?.map(lan => `${lan.name} , `)}</p>


                    </div>
                </div>
                <div className="detail-desc-footer">
                  <div className="detail-bottom">
                      <div>
                        <strong>
                          Border countries: 
                        </strong>
                      </div>
                      <div className="footer-cntry">
                         {
                          country?.borders?.map(country => <span>{country}</span>)
                          }
                      </div>
                      
                  </div>
                </div>
              </div>

            </div> 

          </div>  
      </div>
   
    </div> 
     
  
  )
}

export default DetailsPage