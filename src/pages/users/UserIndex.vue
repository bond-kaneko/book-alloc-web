<script setup lang="ts">
import {useAuth0} from '@auth0/auth0-vue';
import {getWithAuth} from "../../auth0";

const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
const login = () => {
  loginWithRedirect();
}

const publicPing = await getWithAuth("http://localhost:8888/public")
const privatePing = await getWithAuth("http://localhost:8888/auth/ping")
</script>

<template>
    <div class="container">
      <h2>User Profile</h2>
      <button @click="login">Log in</button>
      <button @click="logout">Log out</button>

      <p>Public ping: {{publicPing}}</p>
      <p>Private ping: {{privatePing}}</p>
      <p>Auth: {{ isAuthenticated }}</p>
      <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
    </div>
</template>