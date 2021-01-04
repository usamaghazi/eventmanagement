import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './Abody.css'
const Abody = (props) => {
    return(
        <>
        <div className="container mt-5">
            <div className="row Gradient Radius">
                <div className="col-12 text-center bg-dark pt-5" style={{paddingLeft:'0px',paddingRight:'0px',borderRadius:'20%',backgroundImage:'url(images/e.jpg)'}}>
                    <h1 
                    style={{color:'white',fontSize:'40px',fontFamily:'cursive', fontStyle:'unset', fontWeight:'bolder'}}>
                    About Us
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#BC2D17 " fill-opacity="1" d="M0,160L30,144C60,128,120,96,180,101.3C240,107,300,149,360,138.7C420,128,480,64,540,74.7C600,85,660,171,720,202.7C780,235,840,213,900,186.7C960,160,1020,128,1080,101.3C1140,75,1200,53,1260,64C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </div>
                <div className="col-12 mt-4 Gradient">
                    <p style={{fontSize:'17px', color:'white'}}>
                    <em><b>DN organizers</b></em>, which is one of the best and leading brand name, in plazbo event management, Weddings, Parties and Functions Planning , designing, decoration and Catering Management industry, having solutions for your any type of events, which could be a family events, like weddings, Birthday Parties, Get-Together, Family Parties, Corporate Events, Gala Nights, Conferences, Exhibitions, Seminars or any other type of Event.
                    </p>
                </div>
                <div className="col-12 mt-3">
                    <p style={{fontSize:'17px',color:'white'}}>
                    <em><b>DN organizers</b></em> Provides dedicated, sincerely committed and highly profiled wedding management and events management services, specializing in planning and coordinating luxury weddings for Pakistani families being locally or internationally. We pride ourselves in putting on bespoke event around The Pakistan. Many of our services are provided in-house and are of the highest standards. We have also established strong relationships with specialist suppliers to the Event Management industry and more specifically the wedding industry. We know our suppliers both personally and professionally, therefore we have every faith that impeccable results will be delivered to each of our Overseas Pakistani Families. We love to here your queries for any of your future related event. ” As we don’t see the sky as the the limit” We simply best and unique Weddings Professional for creative and classic wedding ideas.
                    </p>
                </div>
            </div>
        </div>
        <div className="container mt-0 pt-5 pb-5" style={{backgroundColor:'black'}}>
            <div className="row">
                <div className="col-md-7">
                <Map 
                google={props.google} 
                zoom={10}
            initialCenter={{
            lat: 33.5969,
            lng: 73.0528
            }}
            style={{height:'250px',width:'500px'}}>
                <Marker />
                </Map>
                </div>
                <div className="col-md-5 pt-4">
                   <ul className="Unorder-list">
                   <li style={{paddingTop:'0px'}}>
                   <span style={{color:'white',paddingTop:'0px'}}>
                   +92-3214268177 | +92-3244921459 | +92-3334645869 | +923024682710 | +92-3084580827
                   </span>
                   </li>
                   </ul>
                   <ul className="Unorderr-list">
                   <li className="Over" style={{paddingTop:'0px'}}>
                   <span><a href="#black">info@rn_organizers.com.pk</a></span>
                   </li>
                   </ul>
                   <ul className="Unorderp-list">
                   <li style={{paddingTop:'0px'}}>
                   <span style={{color:'white'}}>
                   Near City Center GPO Road, Saddar, Rawalpindi, Pakistan
                   </span>
                   </li>
                   </ul> 
                   <ul className="Unorderrr-list">
                   <li style={{paddingTop:'0px'}}>
                   <span style={{color:'white'}}>Mon to Sat - 1:00Pm to 7:00pm
                   (Sunday Closed)</span>
                   </li>
                   </ul> 
                   <div className="row mt-4 pt-3">
                       <div className="col-4 text-center">
                           <img className="Over" src="images/facebook.png" alt="facebook"/>
                       </div>
                       <div className="col-4 text-center">
                           <img className="Over" src="images/insta.png" alt="insta"/>
                       </div>
                       <div className="col-4 text-center">
                           <img className="Over" src="images/youtube.png" alt="youtube"/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="container mt-0 pt-3 mb-3 Gradient Radiuss">
            <div className="row">
                <div className="col-12">
                    <p style={{fontSize:'17px',color:'white'}}>
                    Over the years, <em>RN organizers,</em> Weddings & Events Solutions has built a reputation within the industry for being innovative, professional and entirely flexible in reacting to our clients’ individual requirements. Although we have the expertise of bringing fresh new ideas to the table, we also value your ideas and suggestions. Our job is to cater to your needs and requirements, which is something that all of our Event Managers are fully aware of at all times.
                    </p>
                </div>
                <div className="col-12 mt-2">
                    <p style={{fontSize:'17px',color:'white'}}>
                    At <em>DN organizers</em> Weddings & Events Solutions, we understand the industry we work in and that is why we are able to offer such a professional service. We keep up-to-date with all the latest trends so we know what’s hot and what’s not!
                    </p>
                </div>
                <div className="col-12 mt-2">
                    <p style={{fontSize:'17px',color:'white'}}>
                    Whether it’s a traditional, modern or highly themed wedding or any type of Family or Corporate Event, you’re dreaming of, we’ll make sure it surpasses your expectations. Wedding planning for themed weddings include sourcing a unique venue or venues, props, décor, styling, thematic lighting décor, concept drawings, custom setups, color scheme, thematic codes, creative entertainment, themed staff including Managers, Events Planners, Supervisors, waiters and caterers.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD9SAkSRaNjGyObLfZ5P_U6m0a1zA-qfGI')
   }) (Abody)