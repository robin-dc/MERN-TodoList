import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

class Api {
    constructor() {
        this.config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    async getTodos(){
        try {
            const response = await axios.get(`/api/todos`)
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
    async checkTodo(id, isDone){
        try {
            const response = await axios.patch(`/api/todos/check`, {id, isDone})
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
    async deleteTodo(id){
        try {
            const response = await axios.delete(`/api/todos/delete/${id}`)
            return response
        } catch (error) {
            console.log(error.message);
        }
    }
    async createTodo(text){
        try {
            const response = await axios.post(`/api/todos`, {text})
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
    async editTodo(id, text){
        try {
            const response = await axios.patch(`/api/todos/edit`, {id, text})
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }

}

export default new Api()
