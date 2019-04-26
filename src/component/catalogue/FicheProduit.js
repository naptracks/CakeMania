import React, { Component } from 'react';
import './FicheProduit.css';
import monImageTest from '../../img/produits/apple-pie.png';
//import ClassProduit from '../../classe/ClassProduit';

class FicheProduit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }
    

    //fonction quantité d'article(s)
    addQuantity = (e) => {
        e.preventDefault();
        if(this.state.quantity >=0) {
            this.setState({
                quantity: this.state.quantity+1
            })
        }
    }

    takeOffQuantity = (e) => {
        e.preventDefault();
        if(this.state.quantity >0) {
            this.setState({
                quantity: this.state.quantity-1
            })
        }
    }

    render() {
        return (
            <div className="marginDeBase container">
                <div className="row">
                    <div className="col">
                        <img src={monImageTest} alt="" className="img-fluid" />
                    </div>
                    <div className="col">
                        <h2>Titre produit</h2>
                        <hr />
                        <p>Descriptif</p>
                        <p>Nombre de part : </p>
                        <p>Prix</p>
                        <form>
                            <div className="form-inline">
                                <label htmlFor="quantity">Combien de titre produit voulez-vous ?</label>
                                <div>
                                    <button
                                        type="button"
                                        id="moins"
                                        className="btn btn-primary"
                                        onClick={this.takeOffQuantity}
                                    >
                                        -
                                    </button>
                                    <input
                                        id="quantity"
                                        name="maQuantite"
                                        type="text"
                                        className="text-center form-control"
                                        value={this.state.quantity} />
                                    <button
                                        type="button"
                                        id="plus"
                                        className="btn btn-primary"
                                        onClick={this.addQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p>Prix total : 0</p>
                            <button
                                className="btn btn-primary">
                                Ajouter au panier
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default FicheProduit;