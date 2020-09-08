import React from 'react';
import Header from './Header/header.js';
import Homepage from '../pages/Homepage/homepage'
import Footer from '../Components/Footer/footer'


const layout = () => {
    return (
        <div>
            <Header/>
            <Homepage/>
            <Footer/>
        </div>
    )
}

export default layout;