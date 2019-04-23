import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="mt-5 bg-light fixed-bottom">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-sm">
                                &copy; Copyright Website by Team Cake - [Réalisé le 20/04/2019]
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;