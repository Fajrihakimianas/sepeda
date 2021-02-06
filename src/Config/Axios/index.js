import axios from "axios";
import errorHandler from "./ErrorHandler";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_HOST}`,
});

instance.interceptors.response.use(
    (response) => response,
    errorHandler
);

export default instance;