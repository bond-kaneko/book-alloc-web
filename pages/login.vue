<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="container">
    <div class="notification is-link is-light">空白のままログインできます</div>
    <section class="section">
      <h1 class="title">Login</h1>
    </section>
    <section class="section">
      <form action="login" method="post">
        <div class="control">
          <label class="label" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="text"
            class="input"
          />
        </div>
        <div class="control">
          <label class="label" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="input"
          />
        </div>
        <div class="field is-grouped">
          <div class="control mt-3 is-flex">
            <a class="button is-link" href="users">Submit</a>
            <div class="is-align-self-center">
              <a href="#" class="my-auto ml-2">Forget password? </a>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
