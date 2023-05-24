import "./Filters.css"
import {
    SearchOutlined
} from '@ant-design/icons';


interface ChildProps {
  name: (data: any) => void;
}

 
 const Filters: React.FC<ChildProps> = ( ) => {
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
                <select name='region_filt' value={'region'} >
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