import React, { Component } from 'react';
import BDDaxiosCommandes from '../../BDD/BDDaxiosCommandes';
import BDDaxiosClients from '../../BDD/BDDaxiosClients';
import './GestionCommandes.css';

class GestionCommandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCommande: [],
            tabClients: []
        }
    }

    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosCommandes.getDonnees((data) => {
            this.setState({ tabCommande: data },
                () => {
                    console.log(`TabCommandes`);
                    console.log(this.state.tabCommande);
                })
        });

        BDDaxiosClients.getDonnees((data) => {
            this.setState({ tabClients: data },
                () => {
                    console.log(`TabClients`);
                    console.log(this.state.tabClients)
                });
        })

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

    affichagetabCommande = () => {
        return this.state.tabCommande.map((item) =>
            <tr key={item.id}>
                <td>{item.id}</td>
                {/* On parcourt le tableau de client pour lier l'id du client à la refClient de la commande */}
                <td>
                    <ul className="list-group">
                        {this.state.tabClients.map((client) => {
                            if (item.refClient === client.id) {
                                let currentClient = `${client.lastName} ${client.firstName}`;
                                console.log(`Client en cours : ${currentClient}`);
                                return <li className="list-group-item font-weight-bold">{currentClient}</li>
                            }
                        })}
                    </ul>
                </td>
                <td>
                    <ul className="list-group">
                        {item.produits.map(product =>
                            <li className="list-group-item">{product}</li>)
                        }
                    </ul>
                </td>
                <td>
                    <ul className="list-group text-center">
                        {item.prixUnitaire.map(prix =>
                            <li className="list-group-item">{prix}</li>)
                        }
                    </ul>
                </td>
                <td>
                    <ul className="list-group text-center">
                        {item.nbrProduit.map((quantity) =>
                            <li className="list-group-item">{quantity}</li>)
                        }
                    </ul>
                </td>
                <td className="text-center">{item.totalPrix}</td>
                <td>Commande : {item.dateCommande} <br />Retrait : {item.dateRetrait}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="container marginDeBase">
                <button onClick={this.goBack} className="btn btn-primary">Retour</button>
                <div className="mt-3">
                    <h2>Gestion des commandes</h2>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Client</th>
                                <th>Produits</th>
                                <th className="text-center">Prix unitaire</th>
                                <th className="text-center">Quantité</th>
                                <th className="text-center">Total prix</th>
                                <th>Date(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mettre la fonction d'affichage du tableau */}
                            {this.affichagetabCommande()}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.deconnexion} className="btn btn-primary mt-5">Déconnexion</button>
            </div>
        );
    }
}

export default GestionCommandes;