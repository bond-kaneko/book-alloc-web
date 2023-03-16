<script setup lang="ts">
import ReadingBookIcon from "~/components/books/icons/ReadingBookIcon.vue";
import WantBookIcon from "~/components/books/icons/WantBookIcon.vue";
import CompleteBookIcon from "~/components/books/icons/CompleteBookIcon.vue";
import StashBookIcon from "~/components/books/icons/StashBookIcon.vue";

const props = defineProps({
  src: String,
  status: String,
})
</script>

<template>
  <div class="card mx-3">
    <div class="card-image">
      <figure class="image is-4by5">
        <img
          :src="props.src"
        />
      </figure>
      <reading-book-icon v-if="status === 'READING'"></reading-book-icon>
      <want-book-icon v-if="status === 'WANT'"></want-book-icon>
      <complete-book-icon v-if="status === 'COMPLETE'"></complete-book-icon>
      <stash-book-icon v-if="status === 'STASH'"></stash-book-icon>
    </div>
  </div>
</template>
