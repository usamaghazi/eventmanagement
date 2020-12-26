import React from 'react'
import { Carousel } from 'react-bootstrap';
export const Slider = (props) => {
    return(
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      style={{height:'450px'}}
      src="images/eee.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="text-center">
      <h2 style={{color:'white',fontWeight:'bolder'}}>Concerts</h2>
      <p>We offer Concerts with creamy budget</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      style={{height:'450px'}}
      src="images/out.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="text-right">
      <h2 style={{color:'white',fontWeight:'bolder'}}>Outdoor Parties</h2>
      <p>Well decorated Setup</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      style={{height:'450px'}}
      src="images/en.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="text-right">
      <h2 style={{color:'white',fontWeight:'bolder'}}>Buffet</h2>
      <p>Serve Buffet with Taste and peacful Environment</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/*Jumbotron */}
<div className="container-fuild">
  <div className="row jumbotron p-5">
    <div className="col-md-9 col-xl-10">
      <p className="lead">
      Insights research,creative campaign development, exhibit and environment design, event production, and more.
      </p>
    </div>
    <div className="col-md-3 col-xl-2">
    <button type="button" 
    className="btn btn-outline-secondary btn-lg">
    Learn More
    </button>
    </div>
  </div>
</div>
        </>    
)
}

export default Slider