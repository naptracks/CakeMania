import React, { Component } from 'react';
import './GestionProduits.css';
import imgNewProduct from '../../img/admin/adminGestionNewProduct.png';
import Button from '../Button';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';

class GestionProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabProduits: []
        }
    }


    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosProduits.getDonnees((data) => {
            this.setState({ tabProduits: data },
                () => console.log(this.state.tabProduits));
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

    affichageProduits = () => {
        return this.state.tabProduits.map((item) =>
            <div className="col-3 card">
                <img src={item.image} className="card-img-top" alt="image gestion client" />
                <div className="card-body text-center">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price} €</p>
                    <div>
                        <Button name="Modifier" onClick="bb" />
                        <button className="btn btn-primary">Supprimer</button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container marginDeBase">
                <button onClick={this.goBack} className="btn btn-primary">Retour</button>
                <div className="mt-3">
                    <h2>Gestion des produits</h2>
                    <div className="col-4 card" id="creationProduit" data-toggle="modal" data-target="#add">
                        <img src={imgNewProduct} className="card-img-top" alt="image gestion client" />
                        <div className="card-body text-center">
                            <i class="fas fa-plus-circle"></i>
                            <hr />
                            <p>Ajouter un produit</p>
                        </div>
                    </div>
                    <div id="toutNosProduits" className="row">
                        {this.affichageProduits()}
                    </div>
                </div>
                <button onClick={this.deconnexion} className="btn btn-primary mt-5">Déconnexion</button>
            </div>
        );
    }
}

export default GestionProduits;