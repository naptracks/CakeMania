import React, { Component } from 'react';
import MenuCompte from './MenuCompte';
import ItemsMenuCards from './ItemsMenuCards';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import MyHistoryOrders from './MyHistoryOrders';

class Account extends Component {
    render() {
        return (
            
            <BrowserRouter>
            <div className="mt-5 d-flex justify-content-center">
                <MenuCompte>
                    <Link to="/accessAccount" className="m-3">
                    <ItemsMenuCards 
                    cardTitle = "Accéder à mon compte"
                    cardText = "Consultez les détails de mon compte"
                    />
                    </Link>
                    <Link to="/currentOrders" className="m-3">
                    <ItemsMenuCards 
                    cardTitle="Commande en Cours"
                    cardText = "Voir les commandes en cours"
                    />
                    </Link>
                    <Link to="/historyOrders" className="m-3">
                    <ItemsMenuCards 
                    cardTitle="Historique de commande"
                    cardText = "Voir l'ensemble des commandes passées à ce jour"
                    />
                    </Link>
                </MenuCompte>
                </div>
                <div className="container">
                    <Route path="/accessAccount" component={MyAccount}/>
                    <Route path="/currentOrders" component={MyOrders}/>
                    <Route path="/historyOrders" component={MyHistoryOrders}/>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default Account;