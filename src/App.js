import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './component/Homepage';
import Coordonnees from './component/Coordonnees';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route path="/coordonnees" component={Coordonnees} />
          <Route path="/footer" component={Footer} />
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
                  <li className="nav-item pr-4"><Link to="/coordonnees"><button type="button" className="btn btn-info">Coordonnées</button></Link></li>
                  <li className="nav-item pr-4"><Link to="/footer"><button type="button" className="btn btn-dark">Footer</button></Link></li>
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
