import axios from "axios";



export async function createPost(post: { title: string }, token: string) {
    try {
        const response = await axios.post(`http://192.168.1.20:8080/api/v1/posts`, post, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;

    } catch (error) {
        console.error(error);
    }
}


