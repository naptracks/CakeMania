import React, { Component } from 'react';
import './ContactUs.css';
import Button from '../Button';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            firstName: "",
            mail: "",
            subject: ""
        }
    }

    /**********************************************************************
     *                          MÉTHODES
    **********************************************************************/

    //Gestion du submit
    handleSubmit = (e) => {
        e.preventDefault();
        //Remise à zéro des champs de saisie
        if (e.target.value !== '') {
            this.setState({ name: '', firstName: '' });
        }
    }

    //Gestion du changement de valeur => enregistrement du nouveau State
    handleChangeLastName = (e) => {
        this.setState({ name: e.target.value });
    }
    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    handleChangeMail = (e) => {
        this.setState({ mail: e.target.value });
    }
    handleChangeSubject = (e) => {
        this.setState({ subject: e.target.value });
    }


    /**********************************************************************
     *                          RENDER
    **********************************************************************/


    render() {
        return (
            
                <div id="FormulaireContact" className="pb-5">
                <div className="container text-center">
                    <h2>Remplissez ce formulaire pour toute commande spécifique</h2>
                    <div className="form-group col-5">
                        {/* Appel à la méthode de gestion du submit sur le formulaire */}
                        {/* Le onSubmit est obligatoirement placé dans la balise form => norme HTML */}
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Nom :</label>
                            {/* Appel à la méthode d'enregistrement des modifications */}
                            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChangeLastName} />
                            <label htmlFor="firstName">Prénom :</label>
                            <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                            <label htmlFor="mail">Email :</label>
                            <input type="email" className="form-control" id="mail" value={this.state.mail} onChange={this.handleChangeMail} />
                            <label htmlFor="subject">Message :</label>
                            <textarea className="form-control mb-4" id="subject" value={this.state.subject} onChange={this.handleChangeSubject} />
                            <Button name="Envoyer" />
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default ContactUs;