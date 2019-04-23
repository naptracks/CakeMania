import React, { Component } from 'react';

class InfoBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.boxText1,
            userNameInput :''
        }
        
        
        
    }

inputChange = (e)=>{
    this.setState({
        userNameInput : e.target.value
    })
     return this.state.userNameInput;
}

userNameSubmit = (e)=>{
    e.preventDefault();
    this.setState({
        name : this.state.userNameInput
    })
    console.log(this.state.userNameInput);
    console.log(this.state.name);

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

                 {/***********************MODAL FORMULAIRE NOM**********/}
                <div id="mymodal" className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modifier</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Saisir votre nom svp </p>
                                <form onSubmit={this.userNameSubmit}>
                                <label htmlFor="formName">Nouveau nom:</label> <br/>
                                <input 
                                value={this.state.userNameInput} 
                                type="text" 
                                id="formName"
                                onChange={this.inputChange}
                                />
                                 <br/>
                                <div className="modal-footer">
                                
                                <button type="submit" className="btn btn-primary">Valider</button>
                            </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoBox;