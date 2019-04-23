import React, { Component } from 'react';
import InfoBox from './InfoBox';

class MyHistoryOrders extends Component {
    render() {
        return (
            <div>
                <InfoBox
                boxHeader="Historique de vos commandes : "
                boxTitle1 = "En ce moment"
                boxText1 = "Le 02/02/2019 | 1x Versaillais 4Pers | 14€"
                boxText2 = "Le 04/02/2019 | 2x Trois Choco 6Pers | 56€"
                boxText3 = "Le 02/02/2019 | 3x Millefeuilles 4Pers | 42€"
                boxText4 = "Le 02/02/2019 | 1x Versaillais 4Pers | 14€"
                boxTitle2 = "Livrées"
                boxText5 = "Le 04/02/2019 | 2x Trois Choco 6Pers | 56€"
                
                
                
                />
            </div>
        );
    }
}

export default MyHistoryOrders;