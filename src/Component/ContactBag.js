import React, { Component } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Margin from './Margin';
class ContactBag extends Component  {

        render () {
        return (
           <div>
               <Margin/>
               <Contact/>
               <Footer/>
           </div>
            
        )
    }
}

export default ContactBag ;