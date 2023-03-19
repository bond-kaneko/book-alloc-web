<script setup lang="ts">
import {useAuth0} from '@auth0/auth0-vue';
import {ref} from "vue";
import axios from "axios";
const {loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();
const login = () => {
  loginWithRedirect();
}

const getToken =  async () => {
  const token = await getAccessTokenSilently();
  return token
}
const token = await getToken()
const response = await axios.get('http://localhost:8888/api/private', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + token,
  },
});
const data = await response
console.log(data)
</script>

<template>
  <div class="container">
    <h2>User Profile</h2>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>

    <p>{{isAuthenticated}}</p>
    <pre v-if="isAuthenticated">
      <code>{{ user }}</code>
    </pre>
    <p>{{token}}</p>
    <p>{{data}}</p>
  </div>
</template>