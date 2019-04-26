import React, { Component } from 'react';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';
import Button from '../Button';

class Recommandation extends Component {
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
                () => console.table(this.state.tabProduits));
        });

    }
    // INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
    componentDidMount() {
        this.importBDD();
    }


    affichageProduits = () => {
        return (
            this.state.tabProduits.map((item) =>
            item.isRecomanded ? 
            <div className="col-3 card" key={item.id}>
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
            : ''
        ));
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>Découvrez nos produits phares !</h2>
                <hr />
                <div className="row justify-content-around">
                    {this.affichageProduits()}
                </div>
            </div>
        );
    }
}

export default Recommandation;