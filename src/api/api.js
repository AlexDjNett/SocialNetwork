import * as axios from "axios";

const instance = axios.create({
    withCredentials: true ,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/' ,
    headers: {
        "API-KEY": "7e0e217a-76e1-47ab-9927-6cdd3463e0eb"
    }
})

export const usersAPI = {
    getUsers(currentPage = 3 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

