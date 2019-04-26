import React, { Component } from 'react';
import './GestionClient.css';
import BDDaxiosCustomer from '../../BDD/BDDaxiosClients';

class GestionClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabClients: []
        }
    }
    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosCustomer.getDonnees((data) => {
            this.setState({ tabClients: data },
                () => console.log(this.state.tabClients));
        });

    }
    // INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
    componentDidMount() {
        this.importBDD();
    }


    goBack = () => {
        this.props.history.push(`/adminGestion`);
    }
    deconnexion = () => {
        this.props.history.push(`/admin`);
    }

    affichagetabClients = () => {
        return this.state.tabClients.map((item) =>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.lastName}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.adressePostale}</td>
                <td>{item.codePostal}</td>
                <td>{item.ville}</td>
                <td>{item.tel}</td>
                <td>{item.paiement}</td>
                <td>{item.id}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="container marginDeBase">
                <button onClick={this.goBack} className="btn btn-primary">Retour</button>
                <div className="mt-3">
                    <h2>Gestion des clients</h2>
                    {/* Barre de recherche */}
                    <div>
                        <form className="col-4">
                            <div className="form-group">
                                <label for="searchClient">Rechercher un client</label>
                                <input type="" className="form-control" id="searchClient"></input>
                            </div>
                        </form>
                        {/* Appel de la fiche client */}
                    </div>

                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Mail</th>
                                <th>Adresse</th>
                                <th>CP</th>
                                <th>Ville</th>
                                <th>Téléphone</th>
                                <th>Moyen de paiement</th>
                                <th>Commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mettre la fonction d'affichage du tableau */}
                            {this.affichagetabClients()}
                        </tbody>
                    </table>

                </div>
                <button onClick={this.deconnexion} className="btn btn-primary mt-5">Déconnexion</button>
            </div>
        );
    }
}

export default GestionClient;