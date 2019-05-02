import React, { Component } from "react";
import "./FicheProduit.css";
import ValideCommand from "../panier/ValideCommand";

class FicheProduit extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(props.location.state.state.gateau.name);
    this.state = {
      quantity: 0,
      prixTotal: 0
    };
  }
  
  //fonction quantité d'article(s)
  addQuantity = e => {
    e.preventDefault();
    if (this.state.quantity >= 0) {
      this.setState(
        {
          quantity: this.state.quantity + 1
          
        },
        () => this.calculeTotal()
      );
    }
  };

  takeOffQuantity = e => {
    e.preventDefault();
    if (this.state.quantity > 0) {
      this.setState(
        {
          quantity: this.state.quantity - 1
        },
        () => this.calculeTotal()
      );
    }
  };

  calculeTotal = () => {
      console.log(this.props.location)
    this.setState({
      prixTotal: Number(
        this.props.location.state.state.gateau.price * this.state.quantity
      )
    });
  };

  render() {
    
    return (
      <div className="marginDeBase container">
        <div className="row">
          <div className="col">
            <img
              src={this.props.location.state.state.gateau.image}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col">
            <h2>{this.props.location.state.state.gateau.name}</h2>
            <hr />
            <p>{this.props.location.state.state.gateau.description}</p>
            <p>
              Nombre de part : {this.props.location.state.state.gateau.size}
            </p>
            <p>{this.props.location.state.state.gateau.price} €</p>
            <form>
              <div className="form-inline">
                <label htmlFor="quantity">
                  Combien de titre produit voulez-vous ?
                </label>
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
                    value={this.state.quantity}
                  />
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
            </form>
            <p>Prix total : {this.state.prixTotal} €</p>
            <button className="btn btn-primary" onClick={ValideCommand.addInPanier(this.props.location.state.state.gateau)}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FicheProduit;
