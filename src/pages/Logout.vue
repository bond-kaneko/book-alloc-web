<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { logout } = useAuth0();
const redirectTo = import.meta.env.VITE_AUTH0_REDIRECT_TO;
</script>

<template>
  <div class="container">
    <button
      @click="
        logout({
          logoutParams: {
            returnTo: redirectTo,
          },
        })
      "
    >
      Log out
    </button>
  </div>
</template>
