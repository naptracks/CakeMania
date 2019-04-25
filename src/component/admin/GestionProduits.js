import React, { Component } from 'react';

class GestionProduits extends Component {
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
                    Gestion produits
                </div>
                <button onClick={this.deconnexion} className="btn btn-primary">Déconnexion</button>
            </div>
        );
    }
}

export default GestionProduits;