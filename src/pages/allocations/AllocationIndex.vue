<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { postWithAuth } from '../../auth0';

const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

const handleCreate = async () => {
  await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    {},
    {}
  );
};
</script>

<template>
  <div class="containter">
    <h1>allocation</h1>
    <button class="button" @click="handleCreate()">New</button>
  </div>
</template>
