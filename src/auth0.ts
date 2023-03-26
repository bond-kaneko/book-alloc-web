import { createAuth0, useAuth0 } from '@auth0/auth0-vue';
import axios, { AxiosRequestConfig } from 'axios';
import { User, useUserStore } from './stores/user';

export const auth0 = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_AUTHORIZATION_PARAMS_REDIRECT_URI,
    audience: import.meta.env.VITE_AUTH0_AUTHORIZATION_PARAMS_AUDIENCE,
  },
});

export const getLoginUser = async () => {
  const userStore = useUserStore();
  if (!userStore.isAuth0Authenticated) {
    return null;
  }

  if (!userStore.loginUser) {
    const { user } = useAuth0();
    const response = await postWithAuth(
      import.meta.env.VITE_API_URL + '/auth/users/me',
      {
        auth0Id: user.value.sub,
      },
      {}
    );
    const loginUser: User = response.data;
    userStore.loginUser = loginUser;
  }

  return userStore.loginUser;
};

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
    },
    ...options,
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
    },
    ...options,
  });
  return result;
};

export const deleteWithAuth = async (
  url: string,
  options?: AxiosRequestConfig
) => {
  const token = await auth0.getAccessTokenSilently();
  const result = await axios.delete(url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    ...options,
  });
};
