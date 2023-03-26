<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { getWithAuth } from '../../../auth0';

const { user } = useAuth0();

const getMyBooks = async () => {
  const response = await getWithAuth(
    import.meta.env.VITE_API_URL + '/auth/books/mine'
  );
  const data = await response.data;
  return data;
};
const books = await getMyBooks();
</script>

<template>
  <div>
    <h1>Books</h1>
    <p>{{ books }}</p>
  </div>
</template>
