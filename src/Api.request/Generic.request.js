import httpService from "./Http.services";
const http="https://localhost:7131"

export const getItemById = (route, id) => {
    return httpService.get(`${http}/${route}/${id}`);
};

export const getAllItems = (route) => {
    console.log("generic request");
    return httpService.get(`${http}/${route}`);

};


export const deleteItem = (route, id) => {
    return httpService.delete(`${http}/${route}/${id}`);
};

export const addItem = (route,item) => {
    return httpService.post(`${http}/${route}/${item}`);
};

export const updateItem = (route, id, destination) => {
    return httpService.put(`${http}/${route}/${id}/${destination}`,);
};