import axios from "axios";

const instance = axios.create({
    baseURL: 'https://wajik-anime-api.vercel.app/otakudesu/',
})

export default instance