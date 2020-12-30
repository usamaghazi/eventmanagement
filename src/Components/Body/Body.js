import React from 'react';
import './Body.css';

export const Body = (props) => {
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col-12 text-center px-4 pt-4 pb-1">
        <h4 className="display-4 lead"style={{fontSize:'5vw' , fontWeight:'300'}}>
        Our Services
        </h4>
        <hr style={{border:'0.01px solid grey', width:'50vw'}}/>
        </div>
        </div>
        </div>
        <div className="container pt-4 pb-5">
            <div className="row">
                <div className="col-lg-4">
            <div className="card Shadow">
                <img class="card-img-top" src="images/wedding.png" alt="Card-cap"/>
                <div class="card-body" style={{backgroundColor:'black'}}>
                <h5 class="card-title" style={{color:'white'}}>The Wedding</h5>
                <p class="card-text" style={{color:'wheat'}}>
                We take care of each and every detail of your dream for the perfect wedding. To make this day perfect as your plan we have various options to work-out.</p>
                <a href="/" className="btn btn-outline-secondary">See More</a>
                </div>
            </div> 
                </div>
                <div className="col-lg-4">
                <div className="card Shadow">
                <img class="card-img-top" src="images/birth.jpg" alt="Card-cop"/>
                <div class="card-body" style={{backgroundColor:'black'}}>
                <h5 class="card-title" style={{color:'white'}}>Birthday</h5>
                <p class="card-text" style={{color:'wheat'}}>
                We ensure to manage everything from planning to execution, be it food, decoration, entertainment or anything else that you have in mind.</p>
                <a href="/" className="btn btn-outline-secondary">See More</a>
                </div>
            </div>   
                </div>
                <div className="col-lg-4">
                <div className="card Shadow">
                <img class="card-img-top" src="images/corporate.jpg" alt="Card-cop"/>
                <div class="card-body" style={{backgroundColor:'black'}}>
                <h5 class="card-title" style={{color:'white'}}>Corperate Events</h5>
                <p class="card-text" style={{color:'wheat'}}>There is no limit to what can be done. Call us to discuss your objectives and we will provide creative, impressive and cost effective solutions every time.</p>
                <a href="/" className="btn btn-outline-secondary">See More</a>
                </div>
            </div> 
                </div>
            </div>
        </div>
        <hr style={{border:'0.01px solid grey', width:'50vw'}}/>
{/*Our Work */}
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 p-2"> 
    <p style={{color:'#756307'}}>Why Choose Us</p>
      <h1>
      Check Out Our Work
      </h1>
      <p>RN organizers Solution’s Creative, dynamic and Vibrant Professional Team is always ready to meet your Challenging Tasks and Projects..
      We have An Extensive Experience in WorldClass Events Planning, Events Designing, Events Decoration, Event’s Catering and Events Executions.
      </p>
      <button type="button" class="btn btn-outline-secondary btn-lg">Learn More</button>
      </div>
  <div className="col-lg-6 p-3">
  <iframe 
  width="540" 
  height="304" 
  src="https://www.youtube.com/embed/yjQdDzF4Q1Y" 
  frameborder="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture" 
  title="videoo"
  allowfullscreen></iframe>
  </div>
  </div>
</div>
{/*Background Image */}
<div className="Fixed-Image" >
  <div style={{padding:'200px 0px',backgroundColor:'black',opacity:'0.5'}} className="gap100 text-center">
  <h1 style={{color:'white'}}>Our Story</h1>
  <p style={{color:'white'}}>DN organizers is an Event management, Catering, Photography and PR,company located in Islamabad. We specialize in weddings, parties, corporate events and much more. We use our expertise to create powerful impressions in all of our endeavours, to make your event leave a lasting impression for years to come.</p>
  </div>
</div>
<div className="container mt-5 py-3 ">
    <div className="row">
        <div class="col-lg-6 pt-5">
            <h1>
            What We do
            </h1>
            <p>
            As a premier wedding planner and event coordination company in Pakistan and abroad, RN organizers is your one stop shop for wedding and corporate events. We take the headache out of trying to choose the best professional, coordinate attendee list and developing an event that everyone will remember always
            </p>
        </div>
        <div className="col-lg-6">
            <img src="images/cmdd.jpg" className="img-fluid" alt=""/>
        </div>
    </div>
</div>   
{/*Our Recent Work */}
<div className="container mt-4 mb-5">
    <div className="row">
        <div className="col-lg-12 text-center pt-4">
            <h1 className="display-4">Recent Work</h1>
            <hr style={{border:'0.01px solid grey', width:'30vw'}}/>
        </div>
    </div>
</div> 
<div className="container">
    <div className="row mb-3">
        <div className="col-lg-4">
            <img 
            className="img-fluid Recent-Work" src="images/p1.jpeg" alt="first"/>
        </div>
        <div className="col-lg-4">
            <img style={{height:'235px'}} 
            className="img-fluid Recent-Work" src="images/p2.jpg" alt="qirst"/>
        </div>
        <div className="col-lg-4">
            <img style={{height:'235px'}} 
            className="img-fluid Recent-Work" src="images/p4.jpg" alt="wirst"/>
        </div>
    </div>
    <div className="row mb-5">
    <div className="col-lg-4">
        <img style={{height:'235px'}}
        className="img-fluid Recent-Work" src="images/p5.jpg" alt="first"/>
    </div>
    <div className="col-lg-4">
        <img style={{height:'235px'}} 
        className="img-fluid Recent-Work" src="images/p6.jpg" alt="qirst"/>
    </div>
    <div className="col-lg-4">
        <img style={{height:'235px'}} 
        className="img-fluid Recent-Work" src="images/propss.jpg" alt="wirst"/>
    </div>
</div>     
</div>
<hr style={{border:'0.01px solid grey', width:'50vw'}}/>
{/*Our Vision */}
<div className="container mt-5 pt-2">
    <div className="row">
    <div className="col-lg-6 bg-dark p-3">
    <img src="images/vision.jpeg" className="img-fluid" alt="vission-pic"/>
    </div>
    <div className="col-lg-6 pt-5 text-center" style={{backgroundColor:'black'}}>
        <h1 style={{color:'white'}}>We Are Experianced</h1>
        <p style={{color:'white'}}>
        We are dedicated to ensuring you get tailored event solutions that bring outstanding outcomes. We ensure the process, planning and execution is applied with ease and smoothness for our clients. We want you to not only love the experience of your event, but also the experience of working with us!

        </p>
    </div>
    </div>
</div> 
{/*Contact Us Jumbotron */}
<div className="container-fuild mb-0">
  <div className="row jumbotron" style={{backgroundColor:'grey'}}>
    <div className="col-md-8 col-xl-9 pl-5">
      <h2  style={{color:'white'}}>
      Do You Still Have A Question Regarding Our Services?
      </h2>
      <p  style={{color:'white'}}>
      We have tons of ideas to provide countless options for your memorable event.
      </p>
    </div>
    <div className="col-md-4 col-xl-3">
    <button type="button" 
    className="btn btn-outline-light btn-lg">
    Contact Us
    </button>
    </div>
  </div>
</div>  
        </>
    )
}

export default Body