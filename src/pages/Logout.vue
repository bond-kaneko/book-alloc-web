<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { logout } = useAuth0();
</script>

<template>
  <div class="container">
    <button @click="logout({ logoutParams: { returnTo: 'http://localhost:5173/login' } })">Log out</button>
  </div>
</template>