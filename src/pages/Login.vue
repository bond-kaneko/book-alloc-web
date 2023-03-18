<script setup lang="ts">
import {useAuth0} from '@auth0/auth0-vue'

const {loginWithRedirect} = useAuth0();
const login = async () => {
  await loginWithRedirect()
}
</script>

<template>
  <div class="container">
    <button @click="login">Log in</button>
  </div>
</template>