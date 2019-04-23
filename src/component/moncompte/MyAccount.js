import React, { Component } from 'react';
import InfoBox from './InfoBox';

class MyAccount extends Component {
    render() {
        return (
            <div>
                <InfoBox 
                boxHeader="Vos informations personnelles "
                boxTitle1 = "Identité"
                boxText1 = "Max Vandine"   
                boxTitle2 = "Adresse"
                boxText2 = "3 rue Barbès"
                boxTitle3 = "Adresse de livraison"
                boxText3 = "4 allée du React"
                boxTitle4 = "Adresse mail"
                boxText4 = "m.vand@...fr"
                boxTitle5 = "Tél"
                boxText5 = "06 69 69 69 69"
                />
            </div>
        );
    }
}

export default MyAccount;