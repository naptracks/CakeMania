import React, { Component } from 'react';
import BDDaxiosCommandes from '../../BDD/BDDaxiosCommandes';
import './Panier.css';

class Panier extends Component {
    state = {
        tabPanier: []
    }
    /************************************/
    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosCommandes.getDonnees((data) => {
            this.setState({ tabPanier: data },
                () => console.table(this.state.tabPanier));
        });

    }
    // INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
    componentDidMount() {
        this.importBDD();
    }
    /************************************/

    affichageTabPanier = () => {
        return this.state.tabPanier.map((item) =>
        
            <tr key={item.id}>
                <td>
                {console.log(item)}
                    {/* {this.affichageDesProduits} */}
                    {item.produits.map( product => <p>{product}</p>)}
                </td>
                <td>{item.nbrProduit.map((cookie) => <p>{cookie}</p>)}</td>
                <td>{item.totalPrix}</td>
                <td>
                    <button className="btn btn-primary">sup</button>
                </td>
            </tr>
        );
    }

    render() {
        console.log(this.state.tabPanier.produits);
        return (
            <div className="marginDeBase container">
                <h2>Mon panier</h2>
                <hr />
                <p>Retrouvez ici tous vos articles sélectionnés</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Article</th>
                            <th>Quantité</th>
                            <th>Prix total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.affichageTabPanier()}
                        <tr id="totalTTC">
                            <td>Prix total de la commande</td>
                            <td></td>
                            <td>le prix total</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Panier;