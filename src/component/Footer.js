import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="dark-wrapper">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-sm">
                                &copy; Copyright Website by <a href="http://www.linkedin.com/in/joris-lefait-79b7646b">Joris LEFAIT</a> - [Réalisé le 09/04/2019]
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;