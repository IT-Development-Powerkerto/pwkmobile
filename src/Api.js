import request from './utils/request';

class Api {
    static urlAPI() {
        // return "https://positive-gym.com/public/api/"
        return "http://mobile.pwkbackoffice.com/public/api/"
    }
    static login(username, password) {
        let path = 'login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                username,
                password,
            },
        })
    }
    static getUserPWK(id) {
        let path = (`userPWK/${id}`);
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        }) 
    }

}
export default Api;