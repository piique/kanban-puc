import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

export const insertTask = payload => api.post(`/task`, payload);
export const getAllTasks = () => api.get(`/tasks`);
export const updateTaskById = (id, payload) => api.put(`/task/${id}`, payload);
export const deleteTaskById = id => api.delete(`/task/${id}`);
