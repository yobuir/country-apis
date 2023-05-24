import React from 'react'
import "./Filters.css"
import {
    SearchOutlined
} from '@ant-design/icons';
function Filters() {
  return (
    <div className="filters">
        <div className='filter_container'>
            <div className="search_container">
                <div className="search">
                    <SearchOutlined style={{fontSize:'17px'}}/>
                    <input type='text' placeholder='search for a country'/>
                </div>
            </div>
            <div className="region_filter">
                <select name='region_filt'>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>

                </select> 
            </div>
        </div>
    </div>

  )
}

export default Filters