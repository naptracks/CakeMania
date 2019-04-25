import React, { Component } from 'react';

class GestionCommandes extends Component {
    goBack = () => {
        this.props.history.push(`/adminGestion`);
    }
    deconnexion = () => {
        this.props.history.push(`/admin`);
    }

    render() {
        return (
            <div className="container marginDeBase">
                <button onClick={this.goBack} className="btn btn-primary">Retour</button>
                <div className="mt-3">
                    Gestion commandes
                </div>
                <button onClick={this.deconnexion} className="btn btn-primary">Déconnexion</button>
            </div>
        );
    }
}

export default GestionCommandes;