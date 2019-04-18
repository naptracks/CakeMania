import React, { Component } from 'react';
/* Import CSS */
import './Button.css';

/*
Pour l'import du bouton utiliser :
<Button name="Découvrir" />
<Button name="Ajouter" />
<Button name="Envoyer" />
<Button name="+" />
<Button name="-" />
*/

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nouvelleClass: "",
        }
    }

    // changementClassName() {
    //     //let thisPropsName = this.props.name;
    //     if (this.props.name == "Découvrir") {
    //         this.setState({
    //             nouvelleClass: this.state.nouvelleClass = "btn btn-primary"
    //         });
    //     }
    //     if (this.props.name == "Ajouter") {
    //         this.setState({
    //             nouvelleClass: this.state.nouvelleClass = "btn btn-secondary"
    //         });
    //     }
    //     if (this.props.name == "Envoyer") {
    //         this.setState({
    //             nouvelleClass: this.state.nouvelleClass = "btn btn-success"
    //         });
    //     }
    //     if (this.props.name == "+" || "-") {
    //         this.setState({
    //             nouvelleClass: this.state.nouvelleClass = "btn btn-danger"
    //         });
    //     }
    // }

    renvoibtn() {
        if (this.props.name === "Découvrir") {
            return (
                <button className="btn btn-primary">
                    {this.props.name}
                </button>
            );
        }
        if (this.props.name === "Ajouter") {
            return (
                <button className="btn btn-secondary">
                    {this.props.name}
                </button>
            );
        }
        if (this.props.name === "Envoyer") {
            return (
                <button className="btn btn-success">
                    {this.props.name}
                </button>
            );
        }
        if (this.props.name === "+" || "-") {
            return (
                <button className="btn btn-danger">
                    {this.props.name}
                </button>
            );
        }
    }

    render() {
        return (
            <p className="d-inline m-0 p-0">{this.renvoibtn()}</p>

            // <button className={this.changementClassName.bind(this)}>
            //     {this.props.name}
            // </button>
        );
    }
}

export default Button;