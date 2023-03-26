<script setup lang="ts">
import { getLoginUser, getWithAuth, postWithAuth } from '../../../auth0';

const result = await getLoginUser();

const getMyBooks = async () => {
  const response = await getWithAuth(
    import.meta.env.VITE_API_URL + '/auth/books/' + result!.ID
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
