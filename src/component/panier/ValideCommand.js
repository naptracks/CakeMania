import BDDaxiosCommandes from '../../BDD/BDDaxiosCommandes'

export default class ValideCommand {

   static preCommand = [];


    static addInPanier = (produit) => {
        console.log(produit)
        ValideCommand.preCommand.push(produit);
        console.log('tableau de preCommand :')
        console.log(ValideCommand.preCommand)
    }

    static removeGateau = (idCake) => {
        let tab = ValideCommand.preCommand;
        tab.splice(idCake, 1);
    }

    static sendPanierToBDD = () => {
        console.log('Panier');
        let paniers = ValideCommand.preCommand;
        paniers.map(panier => BDDaxiosCommandes.postDonnees(panier,
            () => {
                console.log('Post Data Success');
            ValideCommand.preCommand = [];}
            ));

        
    }
}