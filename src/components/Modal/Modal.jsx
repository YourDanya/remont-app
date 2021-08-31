import React from "react";
import "./Modal.css"
import emailjs from 'emailjs-com'
import cross from './../../images/cross.png'

class Modal extends React.Component{

    constructor(props){
        super(props)
        this.state= {name: '', number: '', email: '', submit: false}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    sendMail(e){
        emailjs.sendForm('service_81fem7c', 'template_1hj2hso', e.target, 'user_oUDcNqWQmOnViFne4XBln')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    handleChange(event){
        event.target.name==='name'? this.setState({name: event.target.value}) :
        event.target.name==='number'? this.setState({number: event.target.value}) :
        this.setState({email: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.sendMail(e)
        this.setState({name: '', number: '', email: '', submit: true})
        setTimeout(()=>{
            this.props.setActive(false)
            this.setState({submit: false})
        }, 3000)

    }

    render(){
        return !this.props.active? <div></div>:
        <div className={'modal'} onClick={()=>this.props.setActive(false)}>
            <div className="modal__content" onClick={e=> e.stopPropagation()}>
                <div className="modal__close" onClick={()=>this.props.setActive(false)}><img src={cross}/></div>
                <div className="modal__subtitle">{!this.state.submit? 'Оставьте заявку': 'Спасибо за заявку'}</div>
                <div className="modal__descr">{!this.state.submit? 'и мы свяжемся с вами': 'мы скоро с вами свяжемся'}</div>
                <form className="feed-form feed-form_mt25" onSubmit={this.handleSubmit}>
                     <input name="name" required={true} placeholder="Ваше имя" type="text" value={this.state.name} onChange={this.handleChange}/>
                     <input name="number" required={true} placeholder="Ваш телефон" type="number" value={this.state.number} onChange={this.handleChange}/>
                     <input name="email" required={true} placeholder="Ваш E-mail" type="email" value={this.state.email} onChange={this.handleChange}/>
                     <button className="button">связаться с нами</button>
                 </form>
            </div>
        </div>
    }
}

export default Modal