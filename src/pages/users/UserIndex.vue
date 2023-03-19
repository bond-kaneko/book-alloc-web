<script setup lang="ts">
import {useAuth0} from '@auth0/auth0-vue';
const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
const login = () => {
  loginWithRedirect();
}
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
  </div>
</template>