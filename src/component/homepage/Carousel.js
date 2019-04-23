import React, { Component } from 'react';
/** Import of carousel's images **/
import slider01 from '../../img/slider/slider01.png';
import slider02 from '../../img/slider/slider02.png';
import slider03 from '../../img/slider/slider03.png';
/** Import CSS **/
import '../homepage/Carousel.css'
/** Import component **/
import Button from '../Button';

class Carousel extends Component {
    render() {
        return (
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner positionRelative">
                        <div className="carousel-item active">
                            <img src={slider01} className="d-block w-100" alt="..." />
                            <div className="positionAbsolute d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <h1>Nouveautés 2019</h1>
                                    <p className="subtitle">Venez découvrir notre cheesecake oreo, nos tartelettes aux fruits et nos cupcakes banane</p>
                                    <Button name="Découvrir" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider02} className="d-block w-100" alt="..." />
                            <div className="positionAbsolute d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <h1>Découvrez nos offres cupcakes</h1>
                                    <p className="subtitle">Pour l'achat de 3 cupcakes, le 4ème est gratuit.</p>
                                    <Button name="Découvrir" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider03} className="d-block w-100" alt="..." />
                            <div className="positionAbsolute d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <h1>Titre</h1>
                                    <p className="subtitle">Mon texte</p>
                                    <Button name="Découvrir" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;