<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { postWithAuth } from '../../auth0';

const { user } = useAuth0();

const handleCreate = async () => {
  const loginUser = await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/users/me',
    {
      auth0Id: user.value.sub,
      email: user.value.email,
      name: user.value.nickname,
    },
    {}
  );
  await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    {
      userId: loginUser.data.ID,
      name: user.value.name,
      share: 1,
      isActive: true,
    },
    {}
  );
};
</script>

<template>
  <div class="containter">
    <h1>allocation</h1>
    <button class="button" @click="handleCreate()">New</button>
  </div>
</template>
