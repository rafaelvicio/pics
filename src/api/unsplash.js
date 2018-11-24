import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ede83804ddb025555638d4e7d4c56534e536eecef6b4edd3e6ad4e1407c8f7df'
    }
})
