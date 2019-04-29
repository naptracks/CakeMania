import React, { Component } from 'react';
import InfoBox from './InfoBox';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Jean-Robert',
            userNameInput :'',
            adress: '4 rue React',
            userAdressInput :'',
            delivery: '5 rue soleil',
            userDeliveryInput :'',
            mail: 'gino@live.fr',
            userMailInput :'',
            tel: '06 69 69 69 69',
            userTelInput :''
        }
    }
    // EVENTS HANDLERS

    // HANDLER NOM
    // inputChange = (e)=>{
    //     this.setState({
    //         userNameInput : e.target.value
    //     })
      
    // }
    // HANDLER ADRESS
    inputChangeAdress = (e)=>{
        this.setState({
            userAdressInput : e.target.value
        })
         
    }

    // HANDLER DELIVERY ADRESS
    inputChangeDelivery = (e)=>{
        this.setState({
            userDeliveryInput : e.target.value
        })
         
    }
    // HANDLER MAIL 
    inputChangeMail = (e)=>{
        this.setState({
            userMailInput : e.target.value
        })
         
    }

    // HANDLER USER PHONENUMBER
    inputChangePhone = (e)=>{
        this.setState({
            userTelInput : e.target.value
        })
         
    }
    
    // HANDLER SUBMIT FORMULAIRE MODAL
    userNameSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            name : this.state.userNameInput,
            adress : this.state.userAdressInput,
            delivery : this.state.userDeliveryInput,
            mail : this.state.userMailInput,
            tel : this.state.userTelInput

        })
        console.log(this.state.userNameInput);
        console.log(this.state.name);
    
    }
    

    render() {
        return (
            <div>
            <div>
                <InfoBox 
                boxHeader="Vos informations personnelles "
                boxTitle1 = "Identité"
                boxText1 = {this.state.name}  
                boxTitle2 = "Adresse"
                boxText2 = {this.state.adress}
                boxTitle3 = "Adresse de livraison"
                boxText3 = {this.state.delivery}
                boxTitle4 = "Adresse mail"
                boxText4 = {this.state.mail}
                boxTitle5 = "Tél"
                boxText5 = {this.state.tel}
                />
            </div>
             {/***********************MODAL FORMULAIRE NOM**********/}
             <div id="mymodal" className="modal" tabindex="-1" role="dialog">
             <div className="modal-dialog" role="document">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title">Modifier</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div className="modal-body">
                         <p>Saisir vos infos svp </p>
                         <form onSubmit={this.userNameSubmit}>
                         <label htmlFor="formName">Nouveau nom:</label> <br/>
                         <input 
                         value={this.state.userNameInput} 
                         type="text" 
                         id="formName"
                         onChange={(e)=>this.setState ({ userNameInput : e.target.value})}
                         />

                         <br/>
                         <label htmlFor="formName">Adresse:</label> <br/>
                         <input 
                         value={this.state.userAdressInput} 
                         type="text" 
                         id="formName"
                         onChange={this.inputChangeAdress}
                         />

                         <br/>
                         <label htmlFor="formName">Adresse de livraison:</label> <br/>
                         <input 
                         value={this.state.userDeliveryInput} 
                         type="text" 
                         id="formName"
                         onChange={this.inputChangeDelivery}
                         />
                         <br/>
                         <label htmlFor="formName">Mail:</label> <br/>
                         <input 
                         value={this.state.userMailInput} 
                         type="text" 
                         id="formName"
                         onChange={this.inputChangeMail}
                         />
                         <br/>
                         <label htmlFor="formName">Téléphone:</label> <br/>
                         <input 
                         value={this.state.userTelInput} 
                         type="text" 
                         id="formName"
                         onChange={this.inputChangePhone}
                         />
                         
                          <br/>
                         <div className="modal-footer">
                         
                         <button type="submit" className="btn btn-primary">Valider</button>
                     </div>
                         </form>
                     </div>
                     
                 </div>
             </div>
         </div>
     </div>
        );
    }
}

export default MyAccount;