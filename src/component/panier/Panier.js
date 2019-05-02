import React, { Component } from 'react';
import BDDaxiosCommandes from '../../BDD/BDDaxiosCommandes';
import './Panier.css';
import ValideCommand from './ValideCommand';

class Panier extends Component {
    state = {
        tabPanier: ValideCommand.preCommand
    }

    

  renderTabPanier = () => {
        return this.state.tabPanier.map((item) =>
        
            <tr key={item.id}>
                <td>
                    {item.name}
                </td>
                <td>{item.price}</td>
                <td>{this.quantite}</td>
                <td>
                    <button className="btn btn-primary">sup</button>
                    <button
                    type="button"
                    id="moins"
                    className="btn btn-primary"
                    // onClick={this.takeOffQuantity}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    id="plus"
                    className="btn btn-primary"
                    // onClick={this.addQuantity}
                  >
                    +
                  </button>
                </td>
            </tr>
        );
    }

    render() {
        console.table(this.state.tabPanier);
        return (
            <div className="marginDeBase container">
                <h2>Mon panier</h2>
                <hr />
                <p>Retrouvez ici tous vos articles sélectionnés</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Article</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTabPanier()}                
                        
                    </tbody>
                </table>
                <button 
                className="btn btn-primary"
                onClick={ValideCommand.sendPanierToBDD}
                > Passer au Paiement
                </button>

            </div>
        );
    }
}

export default Panier;