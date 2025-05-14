"use client"
import { useState } from 'react'

const Header = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);

 const toggleNav = () => {
  setIsNavOpen(!isNavOpen);
 };
 return (
  <>
   <header>
    <nav className="navbar navbar-expand-lg navigation fixed-top bg-lightgray" id="navbar">
     <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
       <img src="/images/logo.png" alt="Doctor's Logo" className="img-fluid me-2"/>
       <div className="d-flex flex-column">
        <p className='logo-title mb-0 p-0'>Ζήσης Δ. Βάνης MD, MSc</p>
        <p className='logo-title mb-0 p-0'>Χειρουργός Οφθαλμίατρος | Στρατιωτικός Ιατρός </p>
       </div>
      </a>

      <button className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`} type="button" onClick={toggleNav} aria-label="Toggle navigation">
       <span className="icofont icofont-navigation-menu"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarmain">
       <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
         <a className="nav-link" href="#">Αρχική</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/#about">Βιογραφικό</a></li>
        <li className="nav-item"><a className="nav-link" href="/#services">Υπηρεσίες</a></li>
        <li className="nav-item"><a className="nav-link" href="/#gallery">Το&nbsp;Ιατρείο</a></li>
        <li className="nav-item"><a className="nav-link" href="/#appoinment">Επικοινωνία</a></li>
       </ul>
      </div>
     </div>
    </nav>
   </header>

  </>
 )
}

export default Header
