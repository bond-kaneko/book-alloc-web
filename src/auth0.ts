import {createAuth0} from "@auth0/auth0-vue";
import axios, {AxiosRequestConfig} from "axios";

export const auth0 = createAuth0({
    domain: "dev-dlgdama3kklr7u3i.us.auth0.com",
    clientId: "TWpTNNtOYRuPIccKBwC5ydXLN0WG71fM",
    authorizationParams: {
        redirect_uri: 'http://localhost:5173/login',
        audience: 'localhost:8888'
    }
})

export const getWithAuth = async (url: string, options?: AxiosRequestConfig) => {
    const token = await auth0.getAccessTokenSilently()
    const result = await axios.get(url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        ...options
    })

    return result
}