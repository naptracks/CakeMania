import React, { Component } from 'react';
import './Coordonnees.css';


class Coordonnees extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Nos coordonnées</h2>
                <hr />
                <div className="row mb-5" id="smallSize">
                    <div className="col-sm-12 col-lg-6">
                        <div id="adresse">
                            <h4>Où nous trouver :</h4>
                            <p>4 avenue de l'horizon<br />59650, Villeneuve d'Ascq</p>
                        </div>
                        <div id="horaires">
                            <h4>Nos horaires d'ouverture :</h4>
                            <p>Lun - Ven : 8h00 - 18h00<br />Sam : 8h00 - 12h00</p>
                        </div>
                        <div id="numeroTel">
                            <h4>Vous pouvez nous joindre au :</h4>
                            <p>06.12.34.56.78</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6" id="googleMap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.0950251978493!2d3.1511497155611687!3d50.60677177949726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7b048ecbc97%3A0xb7bd19de7bc0e94!2sM2i+Formation!5e0!3m2!1sfr!2sfr!4v1555597440171!5m2!1sfr!2sfr" title="Maps" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coordonnees;