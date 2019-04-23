import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import logo from '../img/logo-CakeMania.png';

class Footer extends Component {
    render() {
        return (
            <footer >
                <div id="footerLinks">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="img-fluid" id="logoFooter" />
                            </Link>
                            </div>
                            <div className="col">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link to="/products">Catalogue</Link></li>
                                    <li className="list-group-item"><Link to="/contact">Nous contacter</Link></li>
                                    <li className="list-group-item"><Link to="/account">Mon compte</Link></li>
                                    <li className="list-group-item"><Link to="/basket">Mon panier</Link></li>
                                    <li className="list-group-item"><Link to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="row justify-content-end">
                                <a href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://twitter.com/" target="blank"><i className="fab fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    <div className="container">
                        &copy; 2019 - Website by Team Cake
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;