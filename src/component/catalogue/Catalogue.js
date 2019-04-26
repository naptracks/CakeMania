import React, { Component } from 'react';
/* import Produits from './Produits/Produits'
import Filtre from './Filtres/Filtres' 
 */
import BasketAdding from './BasketAdding';
import './Catalogue.css';

class Catalogue extends Component {

    cakeSelected;
    constructor(props) {
        super(props);
        this.state = {

            tableGateaux: [
                { id: 0, typeGateau: 'Brownie', prix: 12, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 1, typeGateau: 'Apple-pie', prix: 15, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 2, typeGateau: 'Cupcake-blueberry', prix: 12, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 3, typeGateau: 'Muffin-choco', prix: 8, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 4, typeGateau: 'Tartelette-fruit', prix: 12, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 5, typeGateau: "Gateau aux prunes", prix: 7, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 6, typeGateau: "Gateau yahourt", prix: 12, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
                { id: 7, typeGateau: "Gateau de Mamie", prix: 5, image: "https://s1.qwant.com/thumbr/0x380/0/c/da91e10bb3f64e97632a4cff987e61fe816a4c68beef060065e0f0b08f2f04/IMG_9331-1400x933.jpg?u=http%3A%2F%2Fblog.zodio.fr%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_9331-1400x933.jpg&q=0&b=1&p=0&a=1" },
            ],

            tableCommande: [
                { id: null, typeGateau: null, nbGateau: null, prixCommande: null }
            ]
        }
    }


    handleAdd = (i) => {
        console.log('test')
        // let count = 0;
        // let sommePartielle = 0;


        let tableCommande = this.state.tableCommande;

        let id = this.state.tableGateaux[i].id;
        let typeGateau = this.state.tableGateaux[i].typeGateau;
        let prix = this.state.tableGateaux[i].prix;

        let commande = {
            id,
            typeGateau,
            prix,
        }

        tableCommande.push(commande);
        /*  tableCommande.push(nbGateau) */


        this.setState({
            tableCommande: tableCommande
        })

        console.log(tableCommande);


        this.calculatePrice(i)

    }

    calculatePrice = (i) => {
        if (this.state.tableGateaux[i].id === 0) {
            console.log("brownie")
        } else {
            console.log("others")
        }
    }


    /* priceByCake=()=>{
        let id=this.state.tableGateaux[i].id; 
    } */
    handleDescribe() {
        alert("voici le descrpitif produit")
    }

    render() {

        return (
            <div className="marginDeBase">
                <div className="container">
                    <div className="row">
                        {this.state.tableGateaux.map((Gateau, i) =>
                            <div className="col-sm-3" key={Gateau.id}>
                                <div className="card text-center">
                                    <img className="card-img-top" src={Gateau.image} alt="brownie" />
                                    <div className="card-body">
                                        <h5 className="card-title">{Gateau.typeGateau}</h5>
                                        <p className="card-text">{Gateau.prix} euros</p>
                                        <button type="button" ref={Gateau.id} className="btn btn-primary" onClick={() => this.handleDescribe(i)}>Voir descriptif</button>
                                        <button type="button" className="btn btn-primary" onClick={() => this.handleAdd(i)}>Ajouter</button>
                                        <BasketAdding />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <h5>Ensemble des commandes</h5>
                {this.state.tableCommande.map((cmd, i) => <li key={i}>
                    {i + 1} {cmd.typeGateau} {cmd.prix}
                </li>)}
                <h5>PRix total des commandes</h5>
                {this.somme}
            </div>
        );
    }
}


export default Catalogue;