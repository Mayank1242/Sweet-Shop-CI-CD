import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import sweets from "../Images/sweets.png";
import google_icon from "../Images/google_icon.png";
import linkedin_icon from "../Images/linkedin_icon.png";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {

  const navigate=useNavigate();


  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };



  function day(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()
        

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return day;
}
function year(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return year;
}
function getmonthname(date){
  
 
    const month = date.toLocaleString('default', { month: 'long' });
    
    return month;
  
}

 return(
  
  
  <div className="container-fluid">
  <div className="row">
  

    <div className="col image-section m-0" >
    <div className="Hero-left mw-100 text-left  ">
      <h1  className="text-center fw-bold pt-5"  >GANGA CONFECTIONERIES PVT. LTD.</h1>
     <img className="img-fluid mt-3" src={sweets} alt="sweets" />
     <div className="p-3">
     <h6 className="p-0 image-text">

     Ganga Confecionery is listed under Sweet Shops In Rajendra Nagar
            Sector 5, Sahibabad , Selhi .Check Address , Contact Number, Ratings
            {"&"} Reviews , Phoots, Maps etc , on Justdial

            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            veritatis sit distinctio ea vel ullam. Necessitatibus officia
            dolores vel expedita in fuga perferendis placeat quis excepturi,
            commodi aperiam soluta eum aut sequi adipisci mollitia dolorem
            molestiae possimus! Expedita qui esse architecto quibusdam
            consequuntur distinctio vitae perspiciatis rem voluptatum, doloribus
            deserunt.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
            magni delectus neque eaque facere!
     </h6>
          <h6 className="fw-bold">
          Share your opinion in 30 minutes interview and win Cash Reward.
            
          </h6>
          </div>      
     </div>
  </div> 
    <div className="col info_form m-0 p-0">
      
         <form  >

          <h1 className="fw-bold text-danger text-center pt-5">RSVP NOW</h1>
          <h6 className="text-left pt-4 mx-5 form-text">
          
            Given the focus of this panel , why do you think you are uniquely
            positioned to provide valuable point? please be specific about your
            relevant expertise and the perspective that you represent.
          </h6>
         <div >
       
         
  



<div className="container-fluid">
  <div className="row">
    <div className="col-md-6 col-sm-12 ">
    <div className="form-group mx-4 my-2 fw-bold ">
    <label htmlFor="yourtext">Enter Your Name</label>
    <input type="Text" className="form-control rounded-pill" id="yourtext"/>
  </div>
    </div>
    <div className="col-md-6 col-sm-12 ">
    <div className="form-group mx-4 my-2 fw-bold ">
    <label htmlFor="email">Email address  </label>
    <input type="email" className="form-control rounded-pill" id="yourtext"/>
  </div>
    </div>
  </div>
</div>

<div className="container-fluid">
  <div className="row ">
    <div className="col-md-6 col-sm-12 fw-bold ">
    <div className="form-group mx-4 my-2">
    <label htmlFor="yourtext">Your Answer</label>
    <input type="Text" className="form-control rounded-pill" id="yourtext"/>
  </div>
    </div>
    <div className="col-md-6 col-sm-12 fw-bold ">
    <div className="form-group mx-4 my-2">
    <label htmlFor="yourtext">Confict of intrest screening </label>
    <input type="Text" className="form-control rounded-pill" id="yourtext"/>
  </div>
    </div>
  </div>
</div>
   
 
<div className="form-group form-check mx-5 my-4">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <h6 className="form-check-label" htmlFor="exampleCheck1">
      
    ** Click here if you are an independent facilitor and would be
              interested in facilitating this knowledgeStream**
    </h6>
  </div>

 
  {/* <button  className="btn btn-danger mx-5 my-3"  >Select Slot</button> */}


  
  {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-danger mx-5 my-3 select_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
Select Slot
</button>

{/* <!-- Modal --> */}
<div className="modal fade  " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered my-5" >
    <div className="modal-content w-150 h-100 ">

      <div className="modal-header">
        <h5 className="modal-title " id="exampleModalLabel">Select a Time</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>



      <div className="modal-body">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-sm-12">
    
      <Calendar  onChange={onChange} value={date} /> 
     
      </div>
      <div className="col-sm-12 col-md-6 ">
      
      <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-sm-12">

      <label htmlFor="" className="datelabel text-light  w-10 h-10"> 
      
     
      {day(date)} {" "}
      
      {getmonthname(date)}{","} {" "} {year(date)}
      </label>

      </div>
      <div className="col-md-12 col-sm-12">

      <div className="container time-zone">
  <div className="row">
    <div className=" col-sm-6 col-md-4 checkbox col-sm-6">
    <div className="form-check  my-2 text-light fw-bold">
         <input className="form-check-input morning-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
         <label className="form-check-label" htmlFor="flexRadioDefault1"> Morning </label>
         
      </div>
    </div>
    <div className="col-sm-6 col-md-4  checkbox  ">
    <div className="form-check my-2 text-light fw-bold">
       <input className="form-check-input afternoon-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
       <label className="form-check-label" htmlFor="flexRadioDefault1"> Afternoon </label>
  </div>
    </div>
    <div className=" col-sm-6 col-md-4   col-sm-6">
    <div className="form-check my-2 text-light  fw-bold">
  <input className="form-check-input evening-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1"> Evening </label>
</div>









    </div>
    <div className="container-fluid">
  <div className="row">


    <div className="col-6 col-xs-6">

    <input type="radio" className="btn-check " name="options" id="option1" autoComplete="off" />
    <label className="btn time btn-success my-2 " htmlFor="option1">9:30am</label>
    </div>

    <div className="col-6  col-xs-6">

    <input type="radio" className="btn-check " name="options" id="option2" autoComplete="off"/>
    <label className="btn time btn-success my-2 " htmlFor="option2">1:30pm</label>
    </div>

    <div className="col-6  col-xs-6">

    <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"/>
    <label className="btn time btn-success my-2" htmlFor="option3">11:00am</label>
    </div>

    <div className="col-6  col-xs-6">
    <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"/>
    <label className="btn time btn-success my-2" htmlFor="option4">2:30pm</label>
    </div>

  </div>


   </div>
  </div>
</div>
        
      </div>
      </div>
      </div>



      


 

       
      

  


      
      </div>
    </div>
    
  </div>
</div>





      
    </div>
  </div>
</div>
  
  {/* <button onClick={toggleModal} className=" btn btn-danger mx-5 my-3">
        Open
      </button> */}

      

  <button  className="btn btn-secondary mx-5 my-3 submit-button" onClick={()=>{
     navigate("/Screen2");
  }}>Submit</button>

      </div>

     

      <button type="button" className="btn bg-transparent mx-5 my-3 text-center fw-bold"><img className="contact" src={google_icon} alt="google" /> Continue with Google</button>
      <button type="button" className="btn bg-transparent mx-5 my-3 text-center fw-bold  ">
      <img className="contact rounded-circle" src={linkedin_icon} alt="google"  />  Continue with Linkedin</button>  
   
      <p className=" px-4  footer">
            <span className="fw-bold">Note : </span> This is like where
            participants can share their opnion on a burning question shared by
            the sponsor . They can post pictures , graphs , detailed , arguments
            to support them. <br />
            <span className="fw-bold" >No guarntee of payment . Participants will get paid based on their
            contribution . Company will decide how much each contributor earns.</span>
            
          
          </p>
          
            
   
   </form>

     

    </div>
  </div>

  


</div>
 )
};

export default Screen1;
