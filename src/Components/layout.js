import React from 'react';
import Header from './Header/header.js';
import Footer from '../Components/Footer/footer'


const layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default layout;