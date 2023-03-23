<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { ref } from 'vue';
import { getWithAuth, postWithAuth } from '../../auth0';

const name = ref('');
const share = ref(null);

const { user } = useAuth0();
// TODO ログインユーザーはstoreに保存する
const loginUser = await postWithAuth(
  import.meta.env.VITE_API_URL + '/auth/users/me',
  {
    auth0Id: user.value.sub,
  },
  {}
);

const handleCreate = async () => {
  await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    {
      userId: loginUser.data.ID,
      name: name.value,
      share: share.value,
      isActive: true,
    },
    {}
  ).then((res) => {
    // TODO エラーハンドリング
    // TODO 二重送信防止
    console.log(res);
  });
};

const allocations = await getWithAuth(
  import.meta.env.VITE_API_URL +
    '/auth/allocations/' +
    encodeURI(loginUser.data.ID),
  {}
);
</script>

<template>
  <div class="containter">
    <section class="section">
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
    </section>
    <section class="section">
      <p>{{ allocations.data }}</p>
    </section>
  </div>
</template>
