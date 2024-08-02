import axios from 'axios';



const httpService = {
    get: async (url) => {
        console.log("httpservice");
        return axios.get(url);
    },
    post: async (url) => {
        return axios.post(url);
    },
    put: async (url) => {
        console.log("url  "  +url);

        return axios.put(url);
    },
    delete: async (url) => {
        return axios.delete(url);
    }
};

export default httpService;