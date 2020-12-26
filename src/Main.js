import React, { Component } from 'react'
import Navbarr from './Components/Navbarr';
import Slider from './Components/Slider';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'
class Main extends Component {
    
    render() {
        return (
            <>
            <Navbarr/>
            <Slider/>
            <Body/>
            <Footer/>
            </>
        );
    }
}

export default Main;