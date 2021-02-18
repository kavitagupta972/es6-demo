import React from 'react';
class GreetingMessageWithoutJSX extends React.Component {
    render() {
        return React.createElement('div', null, 'Hello world, this is component without JSX');
    }
}

export default GreetingMessageWithoutJSX;