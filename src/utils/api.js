import axios from 'axios';
import {ServerConfig} from "../commons/config";
import isEmpty from 'is-empty';

const receiveResponse = (params, route, method = 'get') => {

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: '*/*'
    };

    // if (!empty(authInfo)) {
    //     axios.defaults.headers.common.Authorization = `Bearer ${authInfo.accessToken}`;
    // }

    const receivedRoute = route;
    return new Promise((resolve, reject) => {

        const fullURL = `${ServerConfig.default.API_URL}${receivedRoute}`;

        axios[method](fullURL, params, headers)
            .then(response => resolve(response))
            .catch(error => {
                if (!isEmpty(error.response)) {
                    const { response } = error;
                    if (response.status >= 500) return reject(error);
                    return resolve(response);
                }
                return reject(error);
            });
    });
};

export {
    receiveResponse
}