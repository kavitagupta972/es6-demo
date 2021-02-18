import React from 'react';

function WeatherForecast (){

    const btnNames = [
        "Get",
        "Submit",
        "Reset",
        "logout"
    ];
    const flag = true;
    const message = "hello world";
    function buttonClickEventHandler(event) {
        console.log(event.target.className);
    }

    return (<div className = "messageContainer">
    <h1> Greeting Message</h1>
    <div className = "message">{message}</div>
    {/* conditional rendering */}
    {flag && btnNames.map( (btnName) => {
       return <button key = {btnName} className={btnName} 
        onClick={buttonClickEventHandler}>{btnName}</button>
    })}
    {/* <button className = "getBtn" 
    onClick = {buttonClickEventHandler}>Get</button>
    <button className = "submitBtn" 
    onClick = {buttonClickEventHandler}>Submit</button>
    <button className = "resetBtn" 
    onClick = {buttonClickEventHandler}>Reset</button> */}

</div>);
};

export default WeatherForecast;