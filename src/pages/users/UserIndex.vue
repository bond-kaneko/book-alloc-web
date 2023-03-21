<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { getWithAuth, postWithAuth } from "../../auth0";

const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
const handleLogin = () => {
  loginWithRedirect();
};
const handleLogout = () => {
  logout();
};

const publicPing = await getWithAuth(import.meta.env.VITE_API_URL + "/public");
const privatePing = await getWithAuth(
  import.meta.env.VITE_API_URL + "/auth/ping"
);

const loginUser = await postWithAuth(
  import.meta.env.VITE_API_URL + "/auth/users/me",
  { auth0Id: user.value.sub },
  {}
);
console.log(loginUser);
</script>

<template>
  <div class="container">
    <h2>User Profile</h2>
    <button @click="handleLogin()">Log in</button>
    <button @click="handleLogout">Log out</button>

    <p>Public ping: {{ publicPing.data }}</p>
    <p>Private ping: {{ privatePing.data }}</p>
    <p>Auth: {{ isAuthenticated }}</p>
    <p>Login User: {{ loginUser.data }}</p>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
  </div>
</template>
