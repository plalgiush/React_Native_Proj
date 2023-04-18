import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://stage.day.shellpea.com/api/v1/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType:'json',
    withCredentials: true,
})

export default axios