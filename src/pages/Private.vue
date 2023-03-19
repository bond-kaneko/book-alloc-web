<script setup lang="ts">
import {authGuard, createAuthGuard, useAuth0} from '@auth0/auth0-vue';
import {useRouter} from "vue-router";
import loginRequired from "../helper/loginRequired";
import {onMounted, unref} from "vue";

const {user, isAuthenticated} = useAuth0();

const isLoggedIn = unref(isAuthenticated)
console.log(isLoggedIn)


// if (!isAuthenticated.value) {
//   const router = useRouter()
//   router.push('/login')
// }

// loginRequired(isAuthenticated)

</script>

<template>
  <div class="container">
    Private page
    <p>{{isLoggedIn}}</p>
    <p>{{isAuthenticated}}</p>
    <p>{{user}}</p>
  </div>
</template>