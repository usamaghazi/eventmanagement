import React from 'react'
import './Footer.css'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
const Footer  = (props) => {
    return(
        <>
        <div>
        <div className="container-fluid mt-5">
        <div className="row Gradient pt-5 pb-4 text-center">
          <div className="col-md-6">
            <span><img src="images/logo.png" alt="lopo"/>
            <span 
            style={{fontWeight:'bold',fontSize:'30px',color:'white'}}>RN Organisers</span>
            </span>
            <hr style={{backgroundColor:'white',width:'50%'}}/>
            <p style={{color:'wheat'}}>051-2670155</p>
            <p style={{color:'wheat'}}>info@plazbo.com.pk</p>
            <p style={{color:'wheat'}}>Near City Center GPO Road, Saddar, Rawalpindi, Pakistan</p>
          </div>
          <div className="col-md-6 pl-5">
            {/*<hr style={{backgroundColor:'white',width:'30%'}}/>
            <h5 style={{color:'white',marginTop:'-3px'}}>Our Hours</h5>
            <hr style={{backgroundColor:'white',width:'30%',marginTop:'0px'}}/>
            <p style={{color:'wheat'}}>Monday TO Friday: 9am - 5am</p>
            <p style={{color:'wheat'}}>Saturday: 10am - 4am</p>
    <p style={{color:'wheat'}}>Sunday: Closed</p>*/}
            {/*Maps */}

        <Map 
        google={props.google} 
        zoom={10}
    initialCenter={{
    lat: 33.5969,
    lng: 73.0528
    }}
    style={{height:'200px',width:'400px'}}>
        <Marker />
        </Map> 
          </div>
        </div>
        <div className="row Gradient" style={{marginTop:'1px'}}>
          <div className="col-12 text-center">
            <p style={{color:'wheat'}}>&copy; plazbo.com</p>
          </div>
        </div>
        </div>
        </div>

        </>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD9SAkSRaNjGyObLfZ5P_U6m0a1zA-qfGI')
   }) (Footer)