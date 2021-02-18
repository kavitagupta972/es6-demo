import React from 'react';

function DisplayData({city,unit}){
    return (
        <div>
            <p>{city}</p>
            <p>{unit}</p>
        </div>
        )
}

export default DisplayData;