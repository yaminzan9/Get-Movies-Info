import React, { Component } from 'react';
import {Modal} from "react-bootstrap"; 
import Iimeag from '../imegs/team/personal55.jpg';
import Iimeag1 from '../imegs/team/personal66.jpg';

class Modal3 extends Component{

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
            <div className="modal3-item" ><div className="img" ><img src={Iimeag} /></div></div>
            <div className="modal3-item" ><p>mikel</p></div>
            <div className="modal3-item" >
            <button  onClick={()=>{this.handleModal()}} >c</button>
            </div>
            <Modal className="modal3" show={this.state.show} >
            <Modal.Body>
            <div className="container" ><div className="row" ><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                   <div className="modal-content" >
                    <img src={Iimeag1} />
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

export default Modal3;