import React from 'react';
import Iimegs1 from "../imegs/footer/004-website-24.png";
import Iimegs2 from "../imegs/footer/004-website-25.png";
const Footer = (props) => {
        return (
        <div>
                <div class="container-flued " >
                    <div class="row footer-content" >
                       
                            <div class="col-lg-3 col-md-3 col-sm-12 col-sx-12">
                                <h4>GET YOU APP</h4>
                                <div><img src={Iimegs1} /></div>
                                <div><img src={Iimegs2} /></div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-12 col-sx-12">
                                <h4> RECEIPTCOM</h4>
                                <ol>
                                    <li><a href="#" >HOME</a></li>
                                    <li><a href="#" >THE SOLUTION</a></li>
                                    <li><a href="#" >WHAT IS RECEIPTCOM?</a></li>
                                    <li><a href="#" >APP GALLERY</a></li>
                                    <li><a href="#" >CONTACT</a></li>
                                    <li><a href="#" >LANGUAGE</a></li>
                                </ol>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-sx-12">
                                <h4>FOLLOW US</h4>
                            </div>
                        
                    </div>
                </div>
                
        </div>
        )
}

export default Footer;