import React, { Component } from 'react';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';
import ClassProduit from '../../classe/ClassProduit';
import './Card.css';


class Card extends React.Component {

    select = (e) => {
        let id = e.target.id;
        let gateau = this.props.tableGateaux.filter((item) => parseInt(item.id) === parseInt(id));
        if (gateau.length > 0) {
            gateau = gateau[0];
            this.props.history.push(`/ficheProduit`, {state: { gateau :gateau }});
        }
    }

    render() { 

      console.log(this.props)
    
        return(
         
      
            <div class="col-sm-4">
            <div class="card text-center">
            <img class="card-img-top" src={this.props.image} alt="brownie" />
            <div class="card-body">
                <h5 class="card-title">{this.props.name}</h5>
                <p class="card-text"> {this.props.price}</p>

                <button type="button"  class="btn btn-primary" onClick={()=>this.props.select(this.props.id)} id={this.props.id}>Voir Fiche Produit</button>
              
               <form>
                <div className="form-inline">
                    <label htmlFor="quantity">Combien de {this.props.name} voulez-vous ?</label>
                   
                    <div className="containerButtons">
                    <div class="row">
               
                        <button
                            type="button"
                            id="moins"
                            className="btn btn-primary"
                           onClick={()=>this.props.takeOffQuantity(this.props.id)}
                        >
                            -
                        </button>
             
                        <input
                            id="quantity"
                            name="maQuantite"
                            type="text"
                            className="text-center form-control"
                            value={this.props.cards}/>
               
                        <button
                            type="button"
                            id="plus"
                            className="btn btn-primary"
                            onClick={()=>this.props.addQuantity(this.props.id)}
                        >
                            +
                        </button>
                 
                    </div>
                    </div>


                </div>

            
                </form>
               
                </div>
                <p>Prix total : {this.props.prixTotal} €</p>
                {/* <BasketAdding /> */}
            </div>
            </div>
            
            
        )
      
    }
}

export default Card;
