import Modal from "./Modal";
import React from "react";

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
            <button onClick={()=>this.setActive(true)} className="button button-small button-render">связаться с нами</button>
            <Modal active={this.state.active} setActive={this.setActive}/>
        </div>
    }

}

export default ModalRender