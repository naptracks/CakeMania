import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './component/Homepage';
import Catalogue from './component/catalogue/Catalogue';
import ContactUs from './component/nouscontacter/ContactUs';
import Account from './component/moncompte/Account';
import Panier from './component/panier/Panier';
import Footer from './component/Footer';

import logo from './img/logo-CakeMania.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Catalogue} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/account" component={Account} />
          <Route path="/basket" component={Panier} />
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
              <Link to="/"><img src={logo} alt="Logo" id="logo" className="img-fluid" /></Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="menu" aria-expanded="false" aria-label="Afficher le menu de navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div id="navbarContent" className="navbar-collapse collapse">

                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item mr-4 navButton my-2"><Link to="/products">Catalogue</Link></li>
                  <li className="nav-item mr-4 navButton my-2"><Link to="/contact">Nous contacter</Link></li>
                  <li className="nav-item mr-4 navButton my-2"><Link to="/account">Mon compte</Link></li>
                  <li className="nav-item mr-4 navButton my-2"><Link to="/basket">Panier</Link></li>
                </ul>
              </div>
              </div>
          </nav>
        </div>
        <Footer />
        </BrowserRouter>
      </div>


      </div>
    );
  }
}

export default App;
