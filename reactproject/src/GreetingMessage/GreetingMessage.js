import React from 'react';
import './GreetingMessage.css'
const flag = false;
const message = "hello world";
class GreetingMessage extends React.Component {  
    constructor(){
        super();
        this.state = {
            message : "initial message"
        };
    }
   
    buttonClickEventHandler(buttonMessage) {
        console.log(this);
        console.log(buttonMessage);
    }
 
    render() {
        return <div className = "messageContainer">
            <h1> Greeting Message</h1>
            <div className = "message">{(flag ===  true) ? "hello" : "world"}</div>
            <button className = "getBtn" 
            onClick = {this.buttonClickEventHandler("get button")}>Get</button>
            <button className = "submitBtn" 
            onClick = {this.buttonClickEventHandler}>Submit</button>
            <button className = "resetBtn" 
            onClick = {this.buttonClickEventHandler}>Reset</button>
        </div>
    }
}

export default GreetingMessage;