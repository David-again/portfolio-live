import React, { Component } from 'react';
const myVillains = require('supervillains');
myVillains.all;
// document.write(myVillains.random());

class ConstructionPage extends Component {
    constructor(props) {
        super(props);
        // State variables go here.
        // Class Method bindings go here.
    }
    render() {
        return (
            <div>
                <h2> This component declares this page to be under construction! </h2>
                <p> {myVillains.random()} is responsible for updates!!! </p>
            </div>
        );
    }
}

export default ConstructionPage