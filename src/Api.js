import request from './utils/request';
class Api {
    static urlAPI() {
        return "https://mobile.pwkbackoffice.com/api/"
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
    static editCampaign(id, token, data) {
        let path = `campaigns/${id}`;
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
    static getPromotionDetail(id, token) {
        let path = `get-promo-list/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getPromotionProduct(id, token) {
        let path = `get-promo-product/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getPromotionShipping(id, token) {
        let path = `get-promo-shipping/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getPromotionAdmin(id, token) {
        let path = `get-promo-admin/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getWarehouse(token) {
        let path = 'get-warehouse';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static getMyCampaign(token) {
        let path = 'campaigns';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static deleteCampaign(id, token) {
        let path = `campaigns/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    static checkOngkir(data) {
        let path = 'ongkir';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data
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
    static editLead(id, token, data) {
        let path = `leads/${id}`;
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
    static createCampaign(token, data) {
        let path = 'campaigns';
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