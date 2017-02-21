import React from "react";
import ReactDOM from "react-dom";
import Hello from './components/Hello';
import Main from './components/Main';
import Relay from 'react-relay';


ReactDOM.render(<Main limit={4}/>, document.getElementById('react'));

console.log(
    Relay.QL`
        {
            links{
                title
            }
        }
    `
);
