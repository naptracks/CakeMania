import React, { Component } from 'react';
import InfoBox from './InfoBox';

class MyOrders extends Component {
    render() {
        return (
            <div>
                <InfoBox
                boxHeader="Vos commandes en cours : "
                boxTitle1 = "En ce moment"
                boxText1 = "Le 02/02/2019 | 1x Versaillais 4Pers | 14€"
                boxText2 = "Le 04/02/2019 | 2x Trois Choco 6Pers | 56€"
                boxText3 = "Le 02/02/2019 | 3x Millefeuilles 4Pers | 42€"
                boxText4 = "Le 02/02/2019 | 1x Versaillais 4Pers | 14€"
                
                
                
                />
            </div>
        );
    }
}

export default MyOrders;