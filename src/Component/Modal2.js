import React, { Component } from 'react';
import {Modal} from "react-bootstrap"; 
import Imegs from "../imegs/team/personal22.jpg";
import Imegs1 from "../imegs/team/personal11.jpg";

class Modal2 extends Component{

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
            <div className="container" >
            <div className="modal2-item" ><img src={Imegs} /></div>
            <div className="modal2-item" ><p>jessica</p></div>
            <div className="modal2-item" >
            <button  onClick={()=>{this.handleModal()}} >b</button>
            </div>
            <Modal className="modal2" show={this.state.show} >
            <Modal.Body>
                <div className="container" ><div className="row" ><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                   <div className="modal-content" >
                    <img src={Imegs1} />
                    <p>This explains the beginning of my life all the way to 
                        the end of my life. My life from the beginning was very fun as 
                        I grew up living with my mom’s friend and my friend.
                        But there were a lot of fights and I was very hyper back then.
                    </p>
                    </div>
                    </div></div></div>
            </Modal.Body>
            <Modal.Footer><button className="btn btn-success" onClick={()=>{this.handleModal()}} >close modal</button></Modal.Footer>
            </Modal>
            </div> 
        );
    }
}

export default Modal2;