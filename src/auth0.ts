import { createAuth0 } from '@auth0/auth0-vue';
import axios, { AxiosRequestConfig } from 'axios';

export const auth0 = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_AUTHORIZATION_PARAMS_REDIRECT_URI,
    audience: import.meta.env.VITE_AUTH0_AUTHORIZATION_PARAMS_AUDIENCE,
  },
});

export const getWithAuth = async (
  url: string,
  options?: AxiosRequestConfig
) => {
  const token = await auth0.getAccessTokenSilently();
  const result = await axios.get(url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    ...options,
  });

  return result;
};

export const postWithAuth = async (
  url: string,
  data: Object,
  options?: AxiosRequestConfig
) => {
  const token = await auth0.getAccessTokenSilently();
  const result = await axios.post(url, data, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      ...options,
    },
  });

  return result;
};

export const putWithAuth = async (
  url: string,
  data: Object,
  options?: AxiosRequestConfig
) => {
  const token = await auth0.getAccessTokenSilently();
  const result = await axios.put(url, data, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      ...options,
    },
  });
  return result;
};
