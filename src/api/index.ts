import axios from "axios";

const axiosParams = {
  baseURL:process.env.REACT_APP_BASE_URL,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  //additional headers can be passed in config
  return {
    get: (url, body = null, config = {}) => axios.get(url, config),
    delete: (url, body = null, config = {}) => axios.delete(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.patch(url, body, config),
    put: (url, body, config = {}) => axios.put(url, body, config),
  };
};
export default api(axiosInstance);
