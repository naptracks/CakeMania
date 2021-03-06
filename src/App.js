import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './component/Homepage';
import Catalogue from './component/catalogue/Catalogue';
import ContactUs from './component/nouscontacter/ContactUs';
import Account from './component/moncompte/Account';
import Panier from './component/panier/Panier';
import Footer from './component/Footer';
import FAQ from './component/FAQ';
import Admin from './component/admin/Admin';
import Gestion from './component/admin/Gestion';

import logo from './img/logo-CakeMania.png';
import GestionClient from './component/admin/GestionClient';
import GestionProduits from './component/admin/GestionProduits';
import GestionCommandes from './component/admin/GestionCommandes';
import FicheProduit from './component/catalogue/FicheProduit';
import Connexion from './component/moncompte/Connexion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          {/* Si besoin de props, on utilise cette syntaxe : */}
          <Route path="/products" component={(props) => {return <Catalogue  {...props} />}} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/account" component={Account} />
          <Route path="/basket" component={Panier} />
          <Route path="/ficheProduit" component={FicheProduit} />
          <Route path="/faq" component={FAQ} />
          <Route path="/conexion" component={Connexion} />
          {/* Administration du site */}
          <Route path="/admin" component={Admin} />
          <Route path="/adminGestion" component={Gestion} />
          <Route path="/adminGestionClients" component={GestionClient} />
          <Route path="/adminGestionProduits" component={GestionProduits} />
          <Route path="/adminGestionCommandes" component={GestionCommandes} />
          {/* Fin administration du site */}

          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                  <Link to="/"><img src={logo} alt="Logo" id="logo" className="img-fluid" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="menu" aria-expanded="false" aria-label="Afficher le menu de navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div id="navbarContent" className="navbar-collapse collapse text-right">

                    <ul className="nav navbar-nav ml-auto">
                      <li className="nav-item mr-4 navButton my-2"><Link to="/products">Catalogue</Link></li>
                      <li className="nav-item mr-4 navButton my-2"><Link to="/contact">Nous contacter</Link></li>
                      <li className="nav-item mr-4 navButton my-2"><Link to="/account"><i className="fas fa-user small"></i> Mon compte</Link></li>
                      <li className="nav-item mr-4 navButton my-2"><Link to="/basket"><i className="fas fa-shopping-basket small"></i> Panier</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
            <Footer />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
