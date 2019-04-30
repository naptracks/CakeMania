import React, { Component } from 'react';

class MenuCompte extends Component {
    render() {
        return (
            <div className="mt-5 d-flex justify-content-center   ">
            
                {this.props.children}
            </div>
        );
    }
}

export default MenuCompte;

