import React, { Component } from 'react';

/* import BasketAdding from './BasketAdding'; */
import './Catalogue.css';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';
import ClassProduit from '../../classe/ClassProduit';
import Cards from './Cards'
import ClassCommandes from '../../classe/ClassCommandes';


class Catalogue extends Component {

    cakeSelected;
        state = {
         
            nbrProduit:0,
            totalNbrProduit:0,
            prixTotal: 0,
            tableGateaux: [],
            tableCommande: [],
            //pour l'affichage
            articleSelection: new ClassProduit(),
            //pour ajout � la commande
            articleCommande : new ClassCommandes(),
        }

calculatePrixTotal =()=>{
    // let tableCommande=this.state.tableCommande;
    let prixTotal=0; 
    // for(let data of tableCommande){
    //     prixTotal+=setString(data.prixCommandeSolo);
    // };

    console.log("le prix total est de" + prixTotal)
} 

afficherLesProduits(){
    return ( 

        <div>
        <p>Nbre total produits : {this.state.totalNbrProduit} </p>

        <p>Nbre total produits avec l'id : {this.state.nbrProduit} </p>
        </div>

    )
}
    handleDescribe() {
        alert("voici le descrpitif produit");
    }

    // ************************** MODIF LN BDD ******************************
    // IMPORT BDD
    componentDidMount() {
        this.importBDD();
    }

    importBDD = () => {
        BDDaxiosProduits.getDonnees((data) => {
            this.setState({ tableGateaux: data },
               
                () => console.log(this.state.tableGateaux));
        });
    }
    // INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
  

    //SELECTION D'UN PRODUIT POUR POUVOIR LIÉ CET ARTICLE SPÉCIFIQUE À SA FICHE PRODUIT
    handleSelect = (id) => {
   
        let gateau = this.state.tableGateaux.filter((item) => parseInt(item.id) === parseInt(id));
        if (gateau.length > 0) {
            gateau = gateau[0];
            this.props.history.push(`/ficheProduit`, {state: { gateau :gateau }});
        }
    }

    // ************************** FIN MODIF LN ******************************
    handleTakeOffQuantity=(id)=>{
     
        if (this.state.totalNbrProduit > 0) {
          this.setState(
            {
                totalNbrProduit: this.state.totalNbrProduit - 1,
              
                nbrProduit: this.state.nbrProduit-1
            },
         /*    () => this.calculeTotal() */
          );
        }
      };
    

    handleAddQuantity=(id)=>{
    
        let articleCommande=this.state.articleCommande; 

        if (this.state.totalNbrProduit >= 0) {
      
            this.setState(
              {
                totalNbrProduit: this.state.totalNbrProduit + 1, 
                
              },
              
            /*   () => this.calculeTotal() */
            );

            if(this.state.tableGateaux.id===this.props.id){
                console.log("test");
                articleCommande.nbrProduit+=1
                
                this.setState(
                    {
                        nbrProduit: this.state.nbrProduit + 1, 
                      
                    },
                )
            }
          }
        };

    render() {
        return (
            <div>
                 
                 <button type="button" className="btn btn-primary" onClick={() => this.calculatePrixTotal()}>Somme totale</button>
              { <Cards
            
              tableGateaux={this.state.tableGateaux}
            
              prixTotal={this.state.prixTotal}
              tableCommande={this.state.tableCommande}

              articleSelection ={this.state.articleSelection}
              articleCommande={this.state.articleCommande}
              nbrProduit={this.state.nbrProduit}
              //receiving instruction from first child (card) and second child (produit description)  
              addQuantity={this.handleAddQuantity}
              takeOffQuantity={this.handleTakeOffQuantity}
                select={this.handleSelect}

                            /> }
                            {this.afficherLesProduits()}
            </div>
        );
    }
}

export default Catalogue;

