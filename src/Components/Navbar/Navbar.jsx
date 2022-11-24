import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'
export default function Navbar({userData , logout}) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
  <div className="container">
    <Link className="navbar-brand" to=''>Game Over</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='all'>All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='platform'>Platforms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='sortby'>Sort By</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='categorie'>Categorie</Link>
        </li>
      
        
        
        
      </ul>:''}
      <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">

{userData?
  <li className="nav-item">
<div className='row w-100 d-flex justify-content-center align-items-center '>
  <div className="col-md-6 d-flex mt-2 justify-content-center align-items-center ">
  <h6 className=' text-info'>hello:{userData.first_name}</h6>

  </div>
<div className="col-md-6">

  <Link className="nav-link" onClick={logout}>Log Out</Link>
</div>
  </div>
</li>



 
:<>
        <li className="nav-item">
          <Link className="nav-link" to='login'>Log In</Link>
        </li>
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='register'>Register</Link>
        </li>
</>}


       
      
        
        
      </ul>
      
    </div>
  </div>
</nav>
    
    
    </>
  )
}

