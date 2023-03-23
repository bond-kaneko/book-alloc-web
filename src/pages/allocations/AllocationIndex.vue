<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { ref } from 'vue';
import { getWithAuth, postWithAuth, putWithAuth } from '../../auth0';

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

const handleUpdate = async () => {
  await putWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    allocations,
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
      <form @submit.prevent="handleUpdate">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Share</th>
              <th>IsActive</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="allocation in allocations.data" :key="allocation.ID">
              <td>{{ allocation.ID }}</td>
              <td><input type="text" v-model="allocation.Name" /></td>
              <td><input type="text" v-model="allocation.Share" /></td>
              <td><input type="checkbox" v-model="allocation.IsActive" /></td>
            </tr>
          </tbody>
        </table>
        <button class="button">Update</button>
      </form>
    </section>
  </div>
</template>
