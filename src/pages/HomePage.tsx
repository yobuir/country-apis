import React from 'react' 
import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import Card from '../components/common/Card'
import data from '../../data/data.json';
import './HomePage.css'
function HomePage() {
  console.log(data);
  return (
    <div className='container'>   
    <Navbar/>
    <Filters/>
      <div className="app-container">
          <Card />
          <Card />
          <Card />
      </div>
    </div> 
     
  
  )
}

export default HomePage