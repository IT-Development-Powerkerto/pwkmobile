import request from './utils/request';

class Api {
    static urlAPI() {
        // return "https://positive-gym.com/public/api/"
        // return "http://mobile.pwkbackoffice.com/public/api/"
        return "http://192.168.10.128:8000/api/"
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
    static getLeads(token){
        let path = 'leads';
        return request(`${this.urlAPI()}${path}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }

}
export default Api;