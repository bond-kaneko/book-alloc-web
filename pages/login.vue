<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Login</h1>
    </section>
    <section class="section">
      <button class="button is-primary" @click="$auth.loginWith('auth0')">Auth0でログイン</button>
    </section>
  </div>
</template>

