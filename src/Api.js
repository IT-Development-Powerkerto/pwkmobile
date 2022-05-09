import request from './utils/request';
class Api {
    static urlAPI() {
        return "http://mobile.pwkbackoffice.com/api/"
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
    static getUser(id, token) {
        let path = (`users/${id}`);
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }) 
    }
    static getLeadDaily(token){
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