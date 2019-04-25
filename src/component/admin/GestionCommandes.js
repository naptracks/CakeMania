import React, { Component } from 'react';
import BDDaxiosCommandes from '../../BDD/BDDaxiosCommandes';

class GestionCommandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCommande: []
        }
    }

    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosCommandes.getDonnees((data) => {
            this.setState({ tabCommande: data },
                () => console.log(this.state.tabCommande));
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

    affichagetabCommande = () => {
        return this.state.tabCommande.map((item) =>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.produits}</td>
                <td>{item.totalPrix}</td>
                <td>{item.nbrProduit}</td>
                <td>{item.dateCommande}</td>
                <td>{item.dateRetrait}</td>
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
                                <th>id</th>
                                <th>Produits</th>
                                <th>Total prix</th>
                                <th>Nombre de produit(s)</th>
                                <th>Date de commande</th>
                                <th>Date de retrait</th>
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