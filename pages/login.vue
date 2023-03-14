<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const valid = ref(false)
</script>

<template>
  <div>
    <div>
      <h1>Login</h1>
    </div>
    <div>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="email"></v-text-field>
            <v-text-field v-model="password"></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </div>
  </div>
</template>
