import React, { Component } from 'react';

class Panier extends Component {
    state = {
        tabPanier: []
    }

    affichageTabPanier = () => {
        return this.state.tabPanier.map((item) =>
            <tr>
                <td>Mon article</td>
                <td>Ma quantité</td>
                <td>le prix unitaire</td>
                <td>le prix total</td>
            </tr>
        );
    }

    render() {
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
                            <th>Prix unitaire</th>
                            <th>Prix total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.affichageTabPanier()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Panier;