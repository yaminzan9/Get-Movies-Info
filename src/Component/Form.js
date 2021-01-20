import React from 'react';
import Iimegs from "../imegs/logo/worldlogo.png";
const Form = (props) => {
        return (
            <div className="container-flued" >
            <div className="form-conteant" >
                <div className="form-conteant-header" ><h1>finde your movies info</h1></div>
                
                <form onSubmit={props.getMovie}>
                <div className="form-item container" >
                    <div className="row" >
                    <div className="form-items col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <img src={Iimegs} />
                    </div>

                    <div className="form-items  col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <input type="text" name="moveis" placeholder="movies..." />
                    </div>
                    
                    <div className="form-items col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <button class="btn" >GET YOUR MOVIES INFO</button>
                    </div>
                    </div>
                    </div>
                </form>
                
            </div>
            </div>
        )
}

export default Form;