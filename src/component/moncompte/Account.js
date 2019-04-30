import React, { Component } from 'react';
import MenuCompte from './MenuCompte';
import ItemsMenuCards from './ItemsMenuCards';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import MyHistoryOrders from './MyHistoryOrders';
import '../moncompte/Account.css';
import Connexion from './Connexion';
import  BDDaxiosCustomer from '../../BDD/BDDaxiosClients'

class Account extends Component {

    
    constructor(props) {
        super(props);
        
        this.state = {
            logged : false,
            tabClients :[]
        }
    
    }
    
// IMPORT DE LA BDD
importBDD = () => {
    BDDaxiosCustomer.getDonnees((data) => {
        this.setState({ tabClients: data },
            () => console.log(this.state.tabClients));
    });

}
// INITIALISATION DE LA BDD AU LANCEMENT DE L'APPEL
componentDidMount() {
    this.importBDD();
}


// BUTTON LOGIN CLICK ME
    login = (e) =>{
        e.preventDefault();
        if(this.state.logged == false){
            this.setState({
                logged : true
            })
        } else {
            this.setState({
                logged : false
            }
            )
        }
       
    }

    onSubmit = (e)=>{
        e.preventDefault();
        let mailSubmited = e.target.email.value;
        let pwdSubmited = e.target.mdp.value;
        console.table(this.state.tabClients);

        for(let client of this.state.tabClients){
            console.log(client.email);
            if ((client.email == mailSubmited) && (client.password == pwdSubmited)){
                
                this.setState({
                    logged: true
                })
                localStorage.setItem('CurrentUser', client.firstName);
                let user = localStorage.getItem('CurrentUser');
                console.table(user);
                alert(`Hello ${user}`);
            // } else{
            //     this.setState({
            //         logged:false
            //     },()=>console.log(this.state.logged))
            // }
        } 
    }
}
   
    render() {
        return (
            
            <BrowserRouter>
            
            <div className="mt-5 d-flex justify-content-center" id="myAccount">
                {!this.state.logged && <Connexion onsubmit={this.onSubmit}/>}
                
                <div>
                <button
                 className="btn-primary mt-4"
                 onClick = {this.login}
                 >Click me</button>
                </div>

                {this.state.logged && <React.Fragment>
                    <div className="text-center mt-4">Vous êtes connecté en tant que {localStorage.getItem('CurrentUser')}</div>
                <MenuCompte>
                    
                    <Link to="/accessAccount" className="m-3">
                    <ItemsMenuCards 
                    current = {localStorage.getItem('CurrentUser')}
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
                </React.Fragment>
                }
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