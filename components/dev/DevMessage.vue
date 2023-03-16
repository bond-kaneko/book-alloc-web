<script setup lang="ts">
const props = defineProps({
  message: String
})
</script>

<template>
  <div class="notification is-link is-light">
    {{props.message}}
  </div>
</template>
