import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props){
    return(
        <>
            <Header/>
            <Navbar/>
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;