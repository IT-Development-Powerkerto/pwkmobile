import axios from 'axios';

const request = axios.create({
    timeout: 20000,
    headers: {
        Accept: "application/json",
    },
})

module.exports = request;