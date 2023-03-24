<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { all } from 'axios';
import { ref } from 'vue';
import {
  getWithAuth,
  postWithAuth,
  putWithAuth,
  deleteWithAuth,
} from '../../auth0';

interface Allocation {
  ID: string;
  UserId: string;
  Name: string;
  Share: string;
  IsActive: boolean;
  IsDeleted: boolean;
}

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

const getAllocations = async () => {
  allocations.value = [];
  await getWithAuth(
    import.meta.env.VITE_API_URL +
      '/auth/allocations/' +
      encodeURI(loginUser.data.ID),
    {}
  ).then((res) => {
    res.data.map((allocation: Allocation) => {
      allocation.IsDeleted = false;
      return allocations.value.push(allocation);
    });
  });
};

let allocations = ref(Array<Allocation>());
await getAllocations();

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

  await getAllocations();
};

const handleUpdate = async () => {
  await putWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    allocations.value,
    {}
  ).then((res) => {
    // TODO エラーハンドリング
    // TODO 二重送信防止
    console.log(res);
  });
  await getAllocations();
};
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="allocation in allocations" :key="allocation.ID">
              <td>{{ allocation.ID }}</td>
              <td><input type="text" v-model="allocation.Name" /></td>
              <td><input type="number" v-model="allocation.Share" /></td>
              <td><input type="checkbox" v-model="allocation.IsActive" /></td>
              <td><input type="checkbox" v-model="allocation.IsDeleted" /></td>
            </tr>
          </tbody>
        </table>
        <button class="button">Update</button>
      </form>
    </section>
  </div>
</template>
