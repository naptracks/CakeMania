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
            totalNbrProduit:0,
            prixTotal: 0,
            tableGateaux: [],
            tableCommande: [],
            //pour l'affichage
            articleSelection: new ClassProduit(),
            //pour ajout � la commande
            articleCommande : new ClassCommandes(),
        }
    
  /*   handleAdd = (i) => {
        console.log('test')

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
       

        this.setState({
            tableCommande: tableCommande
        })

        console.table(tableCommande);

        this.calculatePrice(i) 
    };

    handleRemove(i){
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

        tableCommande.splice(commande);
      

        this.setState({
            tableCommande: tableCommande
        })

        console.table(tableCommande);

        this.calculatePrice(i) 
    }


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
} */

calculatePrixTotal =()=>{
    // let tableCommande=this.state.tableCommande;
    let prixTotal=0; 
    // for(let data of tableCommande){
    //     prixTotal+=setString(data.prixCommandeSolo);
    // };

    console.log("le prix total est de" + prixTotal)
} 
/* 
addQuantity = id => {

  
    
    if (this.state.nbrProduit >= 0) {
      
      this.setState(
        {
            nbrProduit: this.state.nbrProduit + 1
          
        },
      /*   () => this.calculeTotal()
      );
    }
  };

takeOffQuantity = id => {
  
   
    if (this.state.nbrProduit > 0) {
     
      this.setState(
        {  
            nbrProduit: this.state.nbrProduit - 1
        },
     /*    () => this.calculeTotal() 
      );
    }
  }; */

/*   calculeTotal = () => {
    this.setState({
      prixTotal: Number(
        this.props.location.state.state.gateau.price * this.state.quantity
      )
    });
  }; */

afficherLesProduits(){
    return ( 


   /* { <div className="marginDeBase">
    <div class="container">
        <div class="row">
            {this.state.tableGateaux.map((Gateau, i) =>
                <div class="col-sm-4">
                    <div class="card text-center">
                        <img class="card-img-top" src={Gateau.image} alt="brownie" />
                        <div class="card-body">
                            <h5 class="card-title">{Gateau.name}</h5>
                            <p class="card-text">{Gateau.price} euros</p>

                            <button type="button" ref={Gateau.id} class="btn btn-primary" onClick={this.select} id={Gateau.id}>Voir Fiche Produit</button>
                          
                           <form>
                            <div className="form-inline">
                                <label htmlFor="quantity">Combien de {Gateau.name} voulez-vous ?</label>
                               
                                <div className="containerButtons">
                                <div class="row">
                           
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


                            </div>

                        
                            </form>
                           
                            </div>
                            <p>Prix total : {this.state.prixTotal} €</p>
                            <BasketAdding />
                        </div>
                       
                    </div>
            
            )}
        </div>
    </div> }
    
{/*     <h5>Ensemble des commandes</h5>
    {this.state.tableCommande.map((cmd, i) => <li key={i}>
        {i + 1} {cmd.typeGateau} {cmd.prix}
    </li>)}
    <h5>Prix total des commandes</h5>
    {this.somme} }
</div>*/

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
                totalNbrProduit: this.state.totalNbrProduit - 1
            },
         /*    () => this.calculeTotal() */
          );
        }
      };
    

    handleAddQuantity=(id)=>{
        if (this.state.totalNbrProduit >= 0) {
      
            this.setState(
              {
                totalNbrProduit: this.state.totalNbrProduit + 1

              },
            /*   () => this.calculeTotal() */
            );
          }
        };

    render() {
        return (
            <div>
                 
                 <button type="button" class="btn btn-primary" onClick={() => this.calculatePrixTotal()}>Somme totale</button>
              { <Cards
            
              tableGateaux={this.state.tableGateaux}
            
              prixTotal={this.state.prixTotal}
              tableCommande={this.state.tableCommande}

              articleSelection ={this.state.articleSelection}
              articleCommande={this.state.articleCommande}

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

