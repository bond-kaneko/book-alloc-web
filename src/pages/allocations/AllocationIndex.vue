<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { ref } from 'vue';
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
      name: name.value,
      share: share.value,
      isActive: true,
    },
    {}
  ).then((res) => console.log(res));
};

const name = ref('');
const share = ref(null);
</script>

<template>
  <div class="containter">
    <h1>allocation</h1>
    <form @submit.prevent="handleCreate">
      <div>
        <label for="name">Name: </label>
        <input id="name" type="text" v-model="name" />
      </div>
      <div>
        <label for="share">Share: </label>
        <input id="share" type="number" v-model="share" />
      </div>
      <button class="button">New</button>
    </form>
  </div>
</template>
