import React, { Component } from 'react';
import Carousel from './homepage/Carousel';
import Recommandation from './homepage/Recommandation';
import Coordonnees from './Coordonnees';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Carousel />  
                <Recommandation />   
                <Coordonnees />           
            </div>
        );
    }
}

export default Homepage;