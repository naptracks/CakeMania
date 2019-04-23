import React, { Component } from 'react';
import Carousel from './homepage/Carousel';
import Coordonnees from './Coordonnees';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Coordonnees />                
            </div>
        );
    }
}

export default Homepage;