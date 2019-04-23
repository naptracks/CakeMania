import React, { Component } from 'react';
import Carousel from './homepage/Carousel';
import Recommandation from './homepage/Recommandation';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Carousel />  
                <Recommandation />              
            </div>
        );
    }
}

export default Homepage;