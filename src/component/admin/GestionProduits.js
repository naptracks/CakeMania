import React, { Component } from 'react';
import './GestionProduits.css';
import imgNewProduct from '../../img/admin/adminGestionNewProduct.png';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';
import ClassProduit from '../../classe/ClassProduit';

class GestionProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabProduits: [],
            produitSel: new ClassProduit()
        }
    }


    // IMPORT DE LA BDD
    importBDD = () => {
        BDDaxiosProduits.getDonnees((data) => {
            this.setState({ tabProduits: data },
                () => console.table(this.state.tabProduits));
        });

    }
    // INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
    componentDidMount() {
        this.importBDD();
    }

    //selection du produit
    select = (e) => {
        let id = e.target.id;
        let co = this.state.tabProduits.filter((item) => parseInt(item.id) === parseInt(id));
        if (co.length > 0) {
            co = co[0];
            this.setState({
                produitSel: co
            }, () => console.log(co))
        }
    }

    goBack = () => {
        this.props.history.push(`/adminGestion`);
    }
    deconnexion = () => {
        this.props.history.push(`/admin`);
    }

    affichageProduits = () => {
        return this.state.tabProduits.map((item) =>
            <div className="col-3 card" key={item.id}>
                <img src={item.image} className="card-img-top" alt="" />
                <div className="card-body text-center">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price} €</p>
                    <div>
                        <button 
                            onClick={this.select} 
                            className="btn btn-primary" 
                            data-toggle="modal" data-target="#modif" 
                            id={item.id}>
                            Modifier
                        </button>
                        <button 
                            onClick={this.select}
                            className="btn btn-primary"
                            data-toggle="modal" data-target="#supp"
                            id={item.id}
                            >
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    addNewProduit = (e) => {
        e.preventDefault();
        let newProduct = new ClassProduit();
        newProduct.name = e.target.name.value;
        newProduct.description = e.target.description.value;
        newProduct.price = Number(e.target.price.value);
        newProduct.image = e.target.image.value;
        if (e.target.isRecomanded.value === "oui" || "Oui" || "O" || "o") {
            newProduct.isRecomanded = true;
        } else {
            newProduct.isRecomanded = false;
        }
        newProduct.size = Number(e.target.size.value);
        newProduct.base = e.target.base.value;

        BDDaxiosProduits.postDonnees(newProduct, this.importBDD);

        // Remise à zéro des champs
        e.target.name.value = '';
        e.target.description.value = '';
        e.target.price.value = '';
        e.target.image.value = '';
        e.target.isRecomanded = '';
        e.target.size.value = '';
        e.target.base.value = '';
    }

    modifProduit = (e) => {
        e.preventDefault();
        let modifProduit = new ClassProduit();
        modifProduit.id = this.state.produitSel.id;

        modifProduit.name = e.target.fname.value;
        modifProduit.description = e.target.description.value;
        modifProduit.price = Number(e.target.price.value);
        modifProduit.image = e.target.image.value;
        modifProduit.isRecomanded = e.target.isRecomanded.checked;
        modifProduit.size = Number(e.target.size.value);
        modifProduit.base = e.target.base.value;

        BDDaxiosProduits.putDonnees(modifProduit, this.importBDD);
    }

    suppProduit = (e) => {
        e.preventDefault();
        let suppProduit = new ClassProduit();
        suppProduit = this.state.produitSel.id;

        BDDaxiosProduits.deleteDonnees(suppProduit, this.importBDD);
    }

    render() {
        return (
            <div className="container marginDeBase" id="gestionProd">
                <button onClick={this.goBack} className="btn btn-primary">Retour</button>
                <div className="mt-3">
                    <h2>Gestion des produits</h2>
                    <div className="col-4 card" id="creationProduit" data-toggle="modal" data-target="#add">
                        <img src={imgNewProduct} className="card-img-top" alt="" />
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
                                    <form onSubmit={this.addNewProduit}>
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
                                            <label htmlFor="isRecomanded">Le produit doit-il être mis sur la page d'accueil ? (Oui, oui, O, o)</label>
                                            <input type="text" id="isRecomanded" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="size">Nombre de parts</label>
                                            <input type="text" id="size" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="base">Base du gâteau</label>
                                            <select className="form-control" id="base">
                                                <option>Vanille</option>
                                                <option>Chocolat</option>
                                                <option>Crème patissière</option>
                                            </select>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Fermer</button>
                                            <button type="submit" className="btn btn-secondary">Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fin MODAL d'ajout d'un produit */}

                </div>
                <div id="toutNosProduits" className="row justify-content-around">
                    {this.affichageProduits()}
                </div>
                {/* MODAL modif d'un produit */}
                <div id="modif" className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modifier un produit</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.modifProduit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nom du produit</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="fname"
                                            className="form-control"
                                            defaultValue={this.state.produitSel.name} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input 
                                            type="text" 
                                            name="fdescription" 
                                            id="description" 
                                            className="form-control" 
                                            defaultValue={this.state.produitSel.description}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Prix (mettre '.' à la place des virgules)</label>
                                        <input 
                                            type="text" 
                                            name="price" 
                                            id="price" 
                                            className="form-control" 
                                            defaultValue={this.state.produitSel.price}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Mettre l'url de l'image</label>
                                        <input 
                                            type="text" 
                                            name="image" 
                                            id="image" 
                                            className="form-control" 
                                            defaultValue={this.state.produitSel.image}/>
                                    </div>
                                    {/* BTN radio true false pour l'affichage en première page */}
                                    <div className="form-group">
                                        <label htmlFor="isRecomanded">Le produit doit-il être mis sur la page d'accueil ? <br/>Si oui, cochez la case.</label>
                                        <input 
                                            type="checkbox" 
                                            name="isRecomanded" 
                                            id="isRecomanded" 
                                            className="form-control" 
                                            defaultValue={this.state.produitSel.isRecomanded}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="size">Nombre de parts</label>
                                        <input 
                                            type="text" 
                                            id="size" 
                                            name="size" 
                                            className="form-control" 
                                            defaultValue={this.state.produitSel.size}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="base">Base du gâteau</label>
                                        <select className="form-control" id="base" name="base"
                                            defaultValue={this.state.produitSel.base}>
                                            <option>Vanille</option>
                                            <option>Chocolat</option>
                                            <option>Crème patissière</option>
                                        </select>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Fermer</button>
                                        <button type="submit" className="btn btn-secondary">Valider</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fin MODAL modif d'un produit */}
                {/* MODAL suppression d'un produit */}
                <div id="supp" className="modal" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Supprimer un produit</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.suppProduit}>
                                        <h3>Êtes-vous sur de vouloir supprimer le produit ?</h3>
                                        <p>Vous devrez recréer le produit si vous le voulez de nouveau.</p>
                                        
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Annuler</button>
                                            <button type="submit" className="btn btn-secondary">Valider</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fin MODAL suppression d'un produit */}
                <button onClick={this.deconnexion} className="btn btn-primary mt-5">Déconnexion</button>
            </div>
        );
    }
}

export default GestionProduits;