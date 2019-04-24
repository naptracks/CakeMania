import React, { Component } from 'react';


class BasketAdding extends Component {
    constructor(props){
        super(props); 

    }


   
    render() {
        return (
            <div>
                <h5>{this.props.id}</h5>
            </div>
        );
    }
}

export default BasketAdding;

