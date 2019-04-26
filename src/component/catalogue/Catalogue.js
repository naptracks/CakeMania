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
                { idCommande: null, typeGateau: null, nbGateauSolo: null, prixCommandeSolo: null}
            ]
        }
    }


    handleAdd = (i) => {
        console.log('test')
        let count = 0;
        let sommePartielle = 0;


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
        
    };

      
    calculatePrice = (i) => {
        
        let tableCommande=this.state.tableCommande; 
        let tableGateaux=this.state.tableGateaux;

        let nbGateauSolo=0; 
        let prixCommandeSolo;

        let prixCake=0;
        

        for(let data of tableCommande){
            
            if (tableGateaux[i].id === data.id) {
                nbGateauSolo++; 
                prixCake=tableGateaux[i].prix;
                
                this.setState({nbGateauSolo: nbGateauSolo});
            }
            
    }   
                prixCommandeSolo=prixCake*nbGateauSolo;
              
                console.log("le prix pour le gateau " + tableGateaux[i].typeGateau + " est " + prixCommandeSolo)   
                this.setState({prixCommandeSolo: prixCommandeSolo});

                this.calculatePrixTotal(); 
}



calculatePrixTotal =()=>{
    let tableCommande=this.state.tableCommande;
    let prixTotal=0; 
    for(let data of tableCommande){
        prixTotal+=setString(data.prixCommandeSolo);
    };

    console.log("le prix total est de" + prixTotal)
} 

afficherLesProduits(){
    return ( 
    <div className="marginDeBase">
    <div class="container">
        <div class="row">
            {this.state.tableGateaux.map((Gateau, i) =>
                <div class="col-sm-3">
                    <div class="card text-center">
                        <img class="card-img-top" src={Gateau.image} alt="brownie" />
                        <div class="card-body">
                            <h5 class="card-title">{Gateau.typeGateau}</h5>
                            <p class="card-text">{Gateau.prix} euros</p>
                            <button type="button" ref={Gateau.id} class="btn btn-primary" onClick={() => this.handleDescribe(i)}>Voir descriptif</button>
                            <button type="button" class="btn btn-primary" onClick={() => this.handleAdd(i)}>Ajouter</button>
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
    <h5>Prix total des commandes</h5>
    {this.somme}
</div>
    )
}
    handleDescribe() {
        alert("voici le descrpitif produit")
    }

    render() {

        return (
        
            <div>
                 {this.afficherLesProduits()}
                 <button type="button" class="btn btn-primary" onClick={() => this.calculatePrixTotal()}>Somme totale</button>
            </div>
           
        );
    }
}


export default Catalogue;