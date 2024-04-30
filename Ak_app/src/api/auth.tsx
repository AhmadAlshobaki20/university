import axios from "axios";
// sginup api integration 

export async function sginup(userInfo: {}) {
    try {
        const response = await axios.post(`http://192.168.1.20:8080/api/v1/users/register`, userInfo)
        return response;

    } catch (error) {
        console.error(error);
    }
}

export async function sginin(userInfo: {}) {
    try {
        const response = await axios.post(`http://192.168.1.20:8080/api/v1/users/login`, userInfo)
        return response;

    } catch (error) {
        console.error(error);
    }
}

