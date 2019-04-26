import axios from 'axios';

const url = "http://localhost:3000/product";

class BDDaxiosProduits {
    static getDonnees = (callback) => {
        axios.get(url)
            .then(
                (response) =>
                    callback(response.data)

            )
            .catch((error) => console.log(error));
    }
    static postDonnees = (data, callback = undefined) => {
        axios.post(url, data)
            .then(
                (response) => {
                    if (callback) {
                        callback()
                    }
                }

            )
            .catch((error) => console.log(error));
    }
    static putDonnees = (data, callback = undefined) => {
        axios.put(url + '/' + data.id, data)
            .then(
                (response) => {
                    if (callback) {
                        callback()
                    }
                }
            )
            .catch((error) => console.log(error));
    }
    static deleteDonnees = (data, callback = undefined) => {
        axios.delete(url + '/' + data)
            .then(
                (response) => {
                    if (callback) {
                        callback()
                    }
                }
            )
            .catch((error) => console.log(error));
    }
}

export default BDDaxiosProduits;