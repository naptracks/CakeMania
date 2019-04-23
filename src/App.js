import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './component/Homepage';

import Catalogue from './component/catalogue/Catalogue';
import ContactUs from './component/nouscontacter/ContactUs';
import Account from './component/moncompte/Account';
import Panier from './component/panier/Panier';

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
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="menu" aria-expanded="false" aria-label="Afficher le menu de navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div id="navbarContent" className="navbar-collapse collapse">

                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item pr-4"><Link to="/"><button type="button" className="btn btn-primary">Accueil</button></Link></li>
                  <li className="nav-item pr-4"><Link to="/products"><button type="button" className="btn btn-info">Catalogue</button></Link></li>
                  <li className="nav-item pr-4"><Link to="/contact"><button type="button" className="btn btn-dark">Nous contacter</button></Link></li>
                  <li className="nav-item pr-4"><Link to="/account"><button type="button" className="btn btn-dark">Mon compte</button></Link></li>
                  <li className="nav-item pr-4"><Link to="/basket"><button type="button" className="btn btn-dark">Panier</button></Link></li>
                </ul>
              </div>
              </div>
          </nav>
        </div>
        </BrowserRouter>
      </div>


      </div>
    );
  }
}

export default App;
