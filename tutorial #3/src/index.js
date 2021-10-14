import Container from './components/Container'
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This is the main entry for our application. It renders out the proper code
 * @returns {JSX.Element}
 * @constructor
 */
ReactDOM.render(
    <React.StrictMode>
        <Container/>
    </React.StrictMode>,
    document.getElementById('root')
);