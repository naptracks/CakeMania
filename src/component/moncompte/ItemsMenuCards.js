import React, { Component } from 'react';

class ItemsMenuCards extends Component {
    render() {
        return (
            
            <div className="card col m-2" >
            <div className="card-body ">
              <h5 className="card-title">{this.props.cardTitle}</h5>
              
              <p className="card-text">{this.props.cardText}</p>
              {/* <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a> */}
            </div>
          </div>
          
        );
    }
}

export default ItemsMenuCards;