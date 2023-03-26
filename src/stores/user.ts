import { useAuth0 } from '@auth0/auth0-vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface User {
  ID: string;
  Name: string;
}

export const useUserStore = defineStore('user', () => {
  const { isAuthenticated } = useAuth0();
  const isAuth0Authenticated = ref(isAuthenticated);
  const loginUser = ref<User>();
  return { isAuth0Authenticated, loginUser };
});
