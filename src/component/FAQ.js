import React, { Component } from 'react';
import './FAQ.css';

class FAQ extends Component {
    render() {
        return (
            <div className="pt-5 container" id="faq">
                <div className="mt-5 row">
                    <div className="col-10">
                        <h2><i className="fa fa-book"></i></h2>
                        <h4>Pourquoi n'y a-t-il pas d'américains steak sauce mayo ?</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequuntur libero eveniet. Aliquam debitis iusto quibusdam, dignissimos obcaecati sapiente tempora inventore dolorem molestiae porro cupiditate doloremque minima nam laboriosam? Doloribus?</p>
                        <hr />
                    </div>
                    <div className="col-10">
                        <h2><i className="fa fa-user-circle"></i></h2>
                        <h4>Quand proposerez-vous de la bière ?</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequuntur libero eveniet. Aliquam debitis iusto quibusdam, dignissimos obcaecati sapiente tempora inventore dolorem molestiae porro cupiditate doloremque minima nam laboriosam? Doloribus?</p>
                        <hr />
                    </div>
                    <div className="col-10">
                        <h2><i className="fa fa-handshake"></i></h2>
                        <h4>Planche d'apéritif ?</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequuntur libero eveniet. Aliquam debitis iusto quibusdam, dignissimos obcaecati sapiente tempora inventore dolorem molestiae porro cupiditate doloremque minima nam laboriosam? Doloribus?</p>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;