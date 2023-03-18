<script setup lang="ts">
import {useAuth0} from '@auth0/auth0-vue';
import {useRouter} from "vue-router";

const {isAuthenticated} = useAuth0();
if (!isAuthenticated.value) {
  const router = useRouter()
  router.push('/login')
}

</script>

<template>
  <div class="container">
    Private page
  </div>
</template>