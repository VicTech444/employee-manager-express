import axios from "axios";

export const callInstance = axios.create({
    baseURL: 'http://localhost:3000'
});