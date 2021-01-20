import React, { Component } from 'react';
import {Modal} from "react-bootstrap"; 
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

class OurTeam extends Component{

        constructor ()
        {
           super()
           this.state={
                show:false
           }
        }
        handleModal()
        {
            this.setState({show:!this.state.show})
        }
        render (){
        return (
        <div>
            <div class="head-eachpart" >our team<div class="underline" ></div></div>
        <div className="container-flued" >
            <div className="row" >
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                <div className="ourteam-item" ><div className="ourteam-items modal1"><Modal1/></div></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                <div className="ourteam-item" ><div className="ourteam-items modal2"><Modal2/></div></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                <div className="ourteam-item" ><div className="ourteam-items modal3"><Modal3/></div></div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default OurTeam;