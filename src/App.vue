<script setup lang="ts">
import {RouterView} from "vue-router";
</script>

<template>
  <div id="app">
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        読み込み中
      </template>
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
@import "../node_modules/bulma/bulma.sass";
</style>
