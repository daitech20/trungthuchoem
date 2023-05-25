import axios from "axios";
const writeFile = (username, password) => {
    var customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return axios.post('http://localhost:8000/api/user/', { username: username, password: password }, customConfig);
}
export {
    writeFile
}
