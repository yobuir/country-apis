 import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="right_nav">
          <h2>Where in the world ?</h2>
        </div>
        <div className='left_nav'>
          <span className='light'> light</span> 
          <span className='dark'> Dark</span> 
        </div>
      </div>
    
    </div>
  )
}

export default Navbar