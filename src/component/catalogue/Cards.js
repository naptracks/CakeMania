import React, { Component } from 'react';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';
/* import ClassProduit from '../../classe/ClassProduit'; */
import './Catalogue.css';

import Card from './Card'

export default class Cards extends Component {
   
  
    afficherLesProduits(){

      
        return ( {/* <div>
           
            {cards.map(card=> <Card/>)}
            </div> */}
                )
     
    
}

importBDD = () => {
    BDDaxiosProduits.getDonnees((data) => {
        this.setState({ tableGateaux: data },
            /* () => console.table(this.state.tableGateaux) */);
    });
}
// INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
/* componentDidMount() {
    this.importBDD();
}
 */





render() { 
        console.log(this.props);
        return ( 
          <div>
          <div class="container">
            <div class="row"></div>
         {this.props.tableGateaux.map((Gateau, i) =>
         <Card   key={i}
         nbrProduit={Gateau.nbrProduit}

         //raising event to the Catalogue
         addQuantity={this.props.addQuantity}
         takeOffQuantity={this.props.takeOffQuantity}
      
//article selection from class produit for the display
        id={Gateau.id}
        price={Gateau.price}
        name={Gateau.name}
        image={Gateau.image}

//article pricing from class commande
        prixTotal={Gateau.prixTotal}
        tableCommande={Gateau.tableCommande}
        articleSelection ={Gateau.articleSelection}
        articleCommande={Gateau.articleCommande}

//MEthodes a faire remonter
    


         /> )}
         </div>
        


            <button type="button" class="btn btn-primary" onClick={() => this.calculatePrixTotal()}>Somme totale</button>
            </div>

        );
    }
}