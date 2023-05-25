import axios from "axios";

const getAllUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
const getTaskUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
}
const MarkDone = (id) => {
    return axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed: true })
}
export {
    getAllUsers, getTaskUser, MarkDone
}