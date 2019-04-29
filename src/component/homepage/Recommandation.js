import React, { Component } from 'react';
import BDDaxiosProduits from '../../BDD/BDDaxiosProduits';

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
            <div className="col-10 col-md-5 col-lg-3 card" key={item.id}>
                <img src={item.image} className="card-img-top" alt="imgClient" />
                <div className="card-body text-center">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price} €</p>
                    <button className="btn btn-primary">Ajouter</button>
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