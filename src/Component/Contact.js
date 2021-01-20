import React, { Component } from 'react';




class Contact extends Component {

  
   
    render() {
      return (
            <div>
                <div class="head-eachpart" >CONTACT US<div class="underline" ></div></div>
                <div class="container" >
                    <div class="row " >
                            
                            <div class="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                                <div class="contact-item" >
                                    <i><svg class="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                        <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                      </svg></i><p>+60-11-15468950</p>
                                      <i><svg class="bi bi-envelope-open" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 8.917l7.757 4.654-.514.858L8 10.083.757 14.43l-.514-.858L8 8.917z"/>
                                        <path fill-rule="evenodd" d="M6.447 10.651L.243 6.93l.514-.858 6.204 3.723-.514.857zm9.31-3.722L9.553 10.65l-.514-.857 6.204-3.723.514.858z"/>
                                        <path fill-rule="evenodd" d="M15 14V5.236a1 1 0 0 0-.553-.894l-6-3a1 1 0 0 0-.894 0l-6 3A1 1 0 0 0 1 5.236V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM1.106 3.447A2 2 0 0 0 0 5.237V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.236a2 2 0 0 0-1.106-1.789l-6-3a2 2 0 0 0-1.788 0l-6 3z"/>
                                      </svg></i><p>info@receiptcom.com</p>
                                      <i><svg class="bi bi-archive" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z"/>
                                        <path fill-rule="evenodd" d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                                      </svg></i><p>T1-12-13, Skyvilla, D'island, Persiaran Utara,</p><p> D'island Residence, 47130 Puchong,</p><p> Selangor, Malaysia</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                                <div class="contact-item" >
                                    <div class="contact-item-form" >
                                    <h4>PLEASE FILL UP THIS FORM FOR ANY INQUIRE</h4>
                                   
                                    <input type="text" placeholder="  Name" />
                                    <input type="text" placeholder="  Email" />
                                    <input type="text" placeholder="  Phone" />
                                    <input class="lastchild-form-input" type="text" placeholder="  Enter message" />
                                    
                                    <button>submet</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
      );
    }
  }


export default Contact;