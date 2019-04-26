import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component {
    validationConnexionAdmin = (e) => {
        e.preventDefault();
        let saisieNom = e.target.emailAdmin.value;
        let saisieMdp = e.target.mdpAdmin.value;
        if ((saisieNom === "Joris" || "Max" || "César" || "Sylvain" || "Hélène") &&
            saisieMdp === "admin") {
                this.props.history.push(`/adminGestion`);
        } else {
            return alert(`Votre nom d'utilisateur ou votre mot de passe est erroné`);
        }
    }

    render() {
        return (
            <div className="marginDeBase">
                <div className="container">
                    <h2>Connectez-vous en tant qu'administrateur</h2>
                    <form onSubmit={this.validationConnexionAdmin}>
                        <div className="form-group">
                            <label htmlFor="email">Saississez votre email</label>
                            <input
                                id="emailAdmin"
                                type="text"
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mdp">Saississez votre mot de passe</label>
                            <input
                                id="mdpAdmin"
                                type="text"
                                className="form-control" />
                        </div>
                        <div className="text-center">
                        {/* <Link to="/adminGestion"> */}
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Connexion
                            </button>
                            {/* </Link> */}
                        </div>
                    </form>
                    {/* {this.validationConnexionAdmin ? <Link to="/admin/gestion"></Link> : ''} */}
                </div>
            </div>
        );
    }
}

export default Admin;