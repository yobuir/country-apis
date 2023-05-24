import HomePage from './pages/HomePage'
import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

function App() { 

  return ( 
     <Router> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/country-details/:name" element={<DetailsPage/>} />
      </Routes> 
    </Router> 

  )
}

export default App
