import React, { Component } from 'react';
import './GestionClient.css';

class GestionClient extends Component {
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
                    <h2>Gestion des clients</h2>
                    <table className="table table-hover table-stripped">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Mail</th>
                                <th>Adresse</th>
                                <th>Code postale</th>
                                <th>Ville</th>
                                <th>Téléphone</th>
                                <th>Moyen de paiement</th>
                                <th>Commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mettre la fonction d'affichage du tableau */}
                        </tbody>
                    </table>

                </div>
                <button onClick={this.deconnexion} className="btn btn-primary">Déconnexion</button>
            </div>
        );
    }
}

export default GestionClient;