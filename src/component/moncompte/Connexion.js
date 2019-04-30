import React, { Component } from 'react';
import './Connexion.css';
import Button from '../Button';

class Connexion extends Component {
    

    render() {
        return (
            <div className="container my-5 marginDeBase" id="fenetreConnexion">
                <div className="row justify-content-around">
                    <div className="col-4 card p-3">
                        <i class="fas fa-user text-center"></i>
                        <hr />
                        <h4>Vous avez déjà un compte ?</h4>
                        <form onSubmit={this.props.onsubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Saississez votre email</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mdp">Saississez votre mot de passe</label>
                                <input
                                    id="mdp"
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="text-center">
                                <Button type="submit" name="Connexion" />
                            </div>
                        </form>
                    </div>
                    <div className="col-4 card p-3">
                        <i class="fas fa-user-plus text-center"></i>
                        <hr />
                        <h4>Créer un compte</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Saississez votre email</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mdp">Saississez votre mot de passe</label>
                                <input
                                    id="mdp"
                                    type="password"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mdpConfirm">Confirmer le mot de passe</label>
                                <input
                                    id="mdpConfirm"
                                    type="password"
                                    className="form-control" />
                            </div>
                            <div className="text-center">
                                <Button name="Connexion" />
                            </div>
                        </form>

                    </div>
                </div>


            </div>
        );
    }
}

export default Connexion;