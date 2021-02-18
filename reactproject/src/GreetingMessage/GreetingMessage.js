import React from 'react';
import './GreetingMessage.css'
const flag = false;
const message = "hello world";
class GreetingMessage extends React.Component {  

    buttonClickEventHandler(event) {
        console.log(event.target.className);
    }
    render() {
        return <div className = "messageContainer">
            <h1> Greeting Message</h1>
            <div className = "message">{(flag ===  true) ? "hello" : "world"}</div>
            <button className = "getBtn" 
            onClick = {this.buttonClickEventHandler}>Get</button>
            <button className = "submitBtn" 
            onClick = {this.buttonClickEventHandler}>Submit</button>
            <button className = "resetBtn" 
            onClick = {this.buttonClickEventHandler}>Reset</button>
        </div>
    }
}

export default GreetingMessage;