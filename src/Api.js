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
    static getLeadDaily(token) {
        let path = 'leads';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getLeadFiltered(token, params) {
        let path = `leads?date_filter=${params}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getCampaign(token) {
        let path = 'get-campaign';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getProduct(token, id) {
        let path = `get-product/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getPromotion(token) {
        let path = 'promotions';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static createPromotion(token, data) {
        let path = 'promotions';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
    static editPromotion(id, token, data) {
        let path = `promotions/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
    static deletePromotion(id, token, data) {
        let path = `promotions/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
    static getProductType(token) {
        let path = 'product-list';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getDetailLead(id, token) {
        let path = `leads/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getProvinces() {
        let path = 'provinces';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static getCity(id) {
        let path = `provinces/${id}/city`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static getSubdistrict(id) {
        let path = `city/${id}/subdistrict`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static addManualLead(token, data) {
        let path = 'leads';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
    static changePassword(token, data) {
        let path = 'change-password';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
    static changeProfile(token, data, id) {
        let path = `users/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data
        })
    }
}
export default Api;