<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { getWithAuth, postWithAuth } from '../../../auth0';

const { user } = useAuth0();
const loginUser = await postWithAuth(
  import.meta.env.VITE_API_URL + '/auth/users/me',
  {
    auth0Id: user.value.sub,
  },
  {}
);

const getMyBooks = async () => {
  const response = await getWithAuth(
    import.meta.env.VITE_API_URL + '/auth/books/' + loginUser.data.ID
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
