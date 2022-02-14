// service file to fetch projects/call APIs related to projects
import axios from 'axios';

export const getAllDevelopersAPI = async() => {
    const response = await axios.get('http://localhost:5000/api/v1/developer/all');
    return response;
};

export const getDeveloperByIdAPI = async(developerId) => {
    const response = await axios.get(`http://localhost:5000/api/v1/developer/${developerId}`);
    return response;
};

export const addDeveloperAPI = async(data) => {
    const response = await axios.post('http://localhost:5000/api/v1/developer/add', data);
    return response;
};

export const removeDeveloperByIdAPI = async(developerId) => {
    const response = await axios.delete(`http://localhost:5000/api/v1/developer/${developerId}`);
    return response;
};