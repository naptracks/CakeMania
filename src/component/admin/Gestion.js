import React, { Component } from 'react';
import { Link } from "react-router-dom";
// <Link to="/admin/gestion/clients"></Link>
// <Link to="/admin/gestion/produits"></Link>
// <Link to="/admin/gestion/commandes"></Link>
import './Admin.css';
import './Gestion.css';
import imgAdminClients from '../../img/admin/adminClients.png';
import imgAdminProduits from '../../img/admin/adminProduits.png';
import imgAdminCommandes from '../../img/admin/adminCommandes.png';

class Gestion extends Component {
    deconnexion = () => {
        this.props.history.push(`/admin`);
    }

    render() {
        return (
            <div className="container marginDeBase">
                <div className="row" id="gestionAdminCard">
                    <div className="col card" >
                        <Link to="/adminGestionClients">
                            <img src={imgAdminClients} className="card-img-top" alt="imgClient" />
                            <div className="card-body">
                                <h3>Gestion des clients</h3>
                                <p>Pour la gestion des clients et de la BDD</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col card" >
                        <Link to="/adminGestionCommandes">
                            <img src={imgAdminCommandes} className="card-img-top" alt="imgCommandes" />
                            <div className="card-body">
                                <h3>Gestion des commandes</h3>
                                <p>Pour la gestion des commandes</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col card" >
                        <Link to="/adminGestionProduits">
                            <img src={imgAdminProduits} className="card-img-top" alt="imgProduits" />
                            <div className="card-body">
                                <h3>Gestion des produits</h3>
                                <p>Ajouter, mettre à jour ou supprimer des prduits</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <button onClick={this.deconnexion} className="btn btn-primary">Déconnexion</button>
            </div>
        );
    }
}

export default Gestion;