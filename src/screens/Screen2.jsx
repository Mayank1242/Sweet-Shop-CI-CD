import React from 'react'
import video_bar from '../Images/video_bar.png'
import sweets_2 from '../Images/sweets_2.png';
import logo1 from '../Images/favicon.ico';
import { NavLink } from 'react-bootstrap';

const Screen2 = () => {
  return (
    
<div className=''>
<hr className='tophr'/>



<div className='container-fluid'>

<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="#"><img src={logo1} alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" to="#">Discover</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" to="#">Reward</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link fw-bold dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Others
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
         
        </li>
    
       
      </ul>
      <div className="d-flex">
        <NavLink htmlFor="">Account </NavLink>
        <button className="btn btn-outline-dark mx-1 rounded-pill bg-black"></button>
      </div>
    </div>
  </div>
</nav>




</div>
<hr className='midhr'/>

<div className='container-fluid'>
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
  
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link   fw-bold" aria-current="page" to="/Home">🤝 Welcome</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  mx-4 fw-bold" to="#">⚙️ Setup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  mx-4 fw-bold" to="/Meet">🎥 Meet</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link  mx-4 fw-bold" to="#">⭐ Review</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  mx-4 fw-bold"  to="#">✍️ Write</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

</div>
<hr className='endhr'/>


<div className="container-fluid ">
  <div className="row">
    <div className="col-md-6">
     <img src={video_bar} alt="meet" className='imagemeet' />
    </div>
    <div className="col-md-6 ">
      <div className='aboutbox  rounded-3'>
      <h6 className='mt-4 fw-bold text-center'>Company Discription</h6>
      <img src={sweets_2} alt="" className='about_img rounded' />
      <div className='about'>
      <p className='  mt-3'>Ganga Confectionery is listed under Sweet Shops in Rajendra Nagaar Sector 5, Shaibabad , Delhi

      From cakes to brownies ,and cupcakes to macarons, cake shops in Sahibabad , Delhi are your go-to hotsopt for treating your sweet tooth.</p>

      <h6 className='text-center fw-bold' > About the interviewer</h6>
       <polygon className=''><span className=''>Madhuri Rao</span> is the Operations manager of Ganga Confectionery Pvt. Ltd. She's and Executive MBA in Operations Mnagemnet, carrying along rich 14+ years of work experience. which has a blend of experience earned from companies like Amul,Cadbury, pizza hut, etc.</polygon>
       </div>
       </div>        
    </div>
  </div>
  
</div>
</div>
  )
}

export default Screen2