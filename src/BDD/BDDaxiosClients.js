import axios from 'axios';

const url = "http://localhost:3000/customers";

class BDDaxiosCustomer {
    static getDonnees = (callback) => {
        axios.get(url)
            .then(
                (response) => 
                    callback(response.data)
                
            )
            .catch((error) => console.log(error));
    }
    static postDonnees = (data, callback) => {
        axios.post(url, data)
            .then(
                (response) => 
                    callback(response.data)
                
            )
            .catch((error) => console.log(error));
    }
    static putDonnees = (data, callback) => {
        axios.put(url + '/' + data.id, data)
            .then(
                (response) => {
                    callback(response.data);
                }
            )
            .catch((error) => console.log(error));
    }
    static deleteDonnees = (data, callback) => {
        axios.delete(url + '/' + data.id)
            .then(
                (response) => {
                    callback(response.data);
                }
            )
            .catch((error) => console.log(error));
    }
}

export default BDDaxiosCustomer;