import React ,{useState} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    const [click , setClick] = useState(false);
    const handleClick = () =>setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
             <Link to='/' className="navbar-logo">
              TRAVEL <i className="fab fa-typo3"></i>
              </Link>
              <div className="menu-icon" onClick= {handleClick}>
                  <i className={click? 'fas fa-times': 'fas fa-bars'}/>
              </div>
              <ul className={click?'nav-menu active' : 'nav-menu'}>
                  <li className ='nav-item'>
                      <Link to ='/' className ='nav-link' onClick={closeMobileMenu}> Home</Link>
                  </li>
                  <li className ='nav-item'>
                      <Link to ='/services' className ='nav-link' onClick={closeMobileMenu}> Services</Link>
                  </li>
                  <li className ='nav-item'>
                      <Link to ='/products' className ='nav-link' onClick={closeMobileMenu}> Products</Link>
                  </li>
                  <li className ='nav-item'>
                      <Link to ='/sign-up' className ='nav-link-mobile' onClick={closeMobileMenu}> Sign up</Link>
                  </li>     
              </ul>
             </div>
             </nav>   
        </>
    )
}

export default Navbar
