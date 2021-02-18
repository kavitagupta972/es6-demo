import {useState} from "react"; 
import DisplayData from "../DisplayData/DisplayData";

function WeatherForecastApi(props){

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('fahrenheit');

    function onUnitChange(e){
        setUnit(e.target.value);
    }
    
    function onCityChange(e){
        setCity(e.target.value);
    }

    function getCurrentTemperature(e){
        e.preventDefault();
        console.log("form is submitted");
    }
    return (
        <div className = "weatherApiContainer">
            <h2>Find the current temperature</h2>
            <form onSubmit={getCurrentTemperature}>
                <label>Enter City</label>
                <input type = "text"
                placeholder="Enter City"
                maxLength="50"
                name = "city"
                value = {city}
                onChange = {onCityChange}
                />
                <div>
                <label>Fahrenheit</label>
                <input type = "radio"
                name = "units"
                value = "fahrenheit"
                checked = {unit === "fahrenheit"}
                onChange = {onUnitChange}
                />
                 <label>Celcius</label>
                <input type = "radio"
                name = "units"
                value = "Celcius"
                checked = {unit === "Celcius"}
                onChange = {onUnitChange}
                />
                </div>
                <input type = "submit" value = "Submit"/>
            </form>
            <div className = "displayDataContainer">
                <DisplayData
                city = {city}
                unit = {unit}/>
            </div>
        </div>
    );
}

export default WeatherForecastApi;