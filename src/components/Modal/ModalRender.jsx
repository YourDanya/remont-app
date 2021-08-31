import Modal from "./Modal";
import React from "react";
import {FaEnvelope, FaPhoneAlt} from "react-icons/all";

class ModalRender extends React.Component{

    constructor(props){
        super(props)
        this.state= {active: false}
        this.setActive=this.setActive.bind(this)
    }

    setActive(bool){
        this.setState({active: bool})
    }

    render(){
        return <div>
            <Modal active={this.state.active} setActive={this.setActive}/>
            <div type="button" className="email-bt" onClick={()=>this.setActive(true)}>
                <div className="text-call">
                    {/*<i className="fa fa-envelope" aria-hidden="true"></i>*/}
                    <i><FaPhoneAlt/></i>
                    <span>Обратная<br/>связь</span>
                </div>
            </div>
        </div>
    }

}

export default ModalRender