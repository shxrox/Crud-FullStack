import axios from 'axios';
const url = "http://localhost:8080/crud";

export const getCrud = async () => {
    const response = await axios.get(url);
    return response.data;
}

export const CrudById = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}

export const addCrud = async (crud) => {
    const response = await axios.post(url, crud);
    return response.data;
}

export const updateCrud = async (id, crud) => {
    const response = await axios.put(`${url}/${id}`, crud);
    return response.data;
}

export const deleteCrud = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
}
