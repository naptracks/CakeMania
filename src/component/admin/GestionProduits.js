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
                            <i className="fas fa-plus-circle"></i>
                            <hr />
                            <p>Ajouter un produit</p>
                        </div>
                    </div>
                    {/* MODAL d'ajout d'un produit */}
                    <div id="add" className="modal" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Ajouter un produit</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Nom du produit</label>
                                            <input type="text" id="name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input type="text" id="description" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Prix (mettre '.' à la place des virgules)</label>
                                            <input type="text" id="price" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="image">Mettre l'url de l'image</label>
                                            <input type="text" id="image" className="form-control" />
                                        </div>
                                        {/* BTN radio true false pour l'affichage en première page */}
                                        <div className="form-group">
                                            <label htmlFor="image">Le produit doit-il être sur la page d'accueil ?</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="true" value="option1" />
                                                <label className="form-check-label" htmlFor="true">Oui</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="false" value="option2" />
                                                <label className="form-check-label" htmlFor="false">Non</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="size">Nombre de parts</label>
                                            <input type="text" id="size" className="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="base">Base du gâteau</label>
                                            <select class="form-control" id="base">
                                                <option>Vanille</option>
                                                <option>Chocolat</option>
                                                <option>Crème patissière</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                    <button type="button" className="btn btn-primary">Ajouter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fin MODAL d'ajout d'un produit */}
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