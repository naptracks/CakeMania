import React, { Component } from 'react';

class InfoBox extends Component {
    constructor(props) {
        super(props);

        
        
        
        
    }






    render() {
        return (
            <div className="card">
                <h5 className="card-header">{this.props.boxHeader}</h5>
                <div className="card-body">
                    <h5 className="card-title text-info">{this.props.boxTitle1}</h5>
                    <p
                        className="card-text"
                        data-toggle="modal"
                        data-target="#mymodal"
                    >{this.props.boxText1}</p>
                    <h5 className="card-title text-info">{this.props.boxTitle2}</h5>
                    <p className="card-text">{this.props.boxText2}</p>
                    <h5 className="card-title text-info">{this.props.boxTitle3}</h5>
                    <p className="card-text ">{this.props.boxText3}</p>
                    <h5 className="card-title text-info">{this.props.boxTitle4}</h5>
                    <p className="card-text ">{this.props.boxText4}</p>
                    <h5 className="card-title text-info">{this.props.boxTitle5}</h5>
                    <p className="card-text ">{this.props.boxText5}</p>

                </div>
</div>
                
        );
    }
}

export default InfoBox;