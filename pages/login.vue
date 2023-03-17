<script setup lang="ts">
import {ref} from 'vue'

const email = ref('')
const password = ref('')
</script>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  middleware: "auth",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      this.error = false
      try {
        await this.$auth.loginWith('local', { data: {
            'email': this.email,
            'password': this.password,
          } })
          .then(()=>{
            this.processing = false
          })
      } catch (err) {
        console.log(err)
        this.auth.error = true
      }
    }
  }
})

</script>

<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Login</h1>
    </section>
    <section class="section">
      <form @submit.prevent="login">
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
            <button class="button is-primary">Submit</button>
            <div class="is-align-self-center">
              <a href="#" class="my-auto ml-2">Forget password?</a>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
