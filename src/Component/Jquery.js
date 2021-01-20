/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import $ from "jquery";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Imegs from "../imegs/about/about.png";
class Jquery extends Component {
  componentDidMount() {
    $(".jquery-content-mean-text").click(function() {
      $(".slid-down").slideToggle();
    });
  }
  render() {
    return (
    <div className="container-fluied" >  
      <div className="jquery-content" >
        <div className="jquery-item" >
        <h1 className="jquery-content-mean-text" >ABOUT US <i><AiFillCaretDown/></i></h1>
        </div>


        <div className="jquery-item slid-down " >
        <div className="container-floued" ><div className="row" >
        <div className="jquery-item-info col-lg-6 col-md-6 col-sm-12 col-xs-12" >
        <img src={Imegs} />
        </div>
        <div className="jquery-item-info col-lg-6 col-md-6 col-sm-12 col-xs-12" >
           <div className="jquery-item-info-text" >
               <span className="jquery-ite-info-span1" >ABOUT</span>
           <span className="jquery-ite-info-span2"> US</span>
           <h4>LANDING BAGE</h4>
           <p>welcom to our webside</p>
           <p>welcom to our webside welcom to our webside </p>
           <p>welcom to our webside welcom</p>
           <p>welcom to our webside welcom to our</p>
           <button className="btn btn-info" >SHOW MORE<i><AiOutlinePlus/></i></button>
           </div>
           
        </div>
        </div>
      </div>
      </div></div>
      </div>
     
    );
  }
}

export default Jquery;