 
import Navbar from '../components/Navbar' 
import Card from '../components/common/Card'
import data from '../../data/data.json';
import "../components/Filters.css"
import {
    SearchOutlined
} from '@ant-design/icons';

import { useState } from 'react';
import './HomePage.css' 
const HomePage = () => {   
  const [region ,setRegion]=useState('');
  const [countryName,setCountryName] = useState('');

  const handleFilterDataRegion= (e:any)=>{
    setRegion(e.target.value);
    console.log(region);

  }
 
  const handleFilterDataName = (e:any)=>{
    setCountryName(e.target.value);
    console.log(countryName);
  }
 
  const listCountries = data.filter((country) => {
      const countryNm = country.name.includes(countryName);
      const countryRegion = country.region.includes(region);
      console.log(countryRegion)
      if(region=== 'region') {
       return countryRegion
      }else{ 
        return countryNm && countryRegion;
 
      }
            
  });  

  return (
    <div className='container'>   
      <Navbar/> 
       <div className="filters">
          <div className='filter_container'>
              <div className="search_container">
                  <div className="search">
                      <SearchOutlined style={{fontSize:'17px'}}/>
                      <input type='text' onKeyUp={handleFilterDataName} placeholder='search for a country'/>
                  </div>
              </div>
              <div className="region_filter">
                  <select name='region_filt' value={'region'} onChange={handleFilterDataRegion}>
                      <option value={' '}>Select</option>
                      <option>Africa</option>
                      <option>America</option>
                      <option>Asia</option>
                      <option>Europe</option>
                      <option>Oceania</option> 
                  </select> 
              </div>
          </div>
      </div>
      <div className="app-container"> 
            {listCountries.length > 0 ? (
            listCountries.map((data, index) => (
              <Card key={index} countries={data} />
            ))
          ) : (
            <p>Nothing to show</p>
          )}
      </div>
    </div> 
     
  
  )
}

export default HomePage