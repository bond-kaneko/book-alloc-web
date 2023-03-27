<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { all } from 'axios';
import { ref } from 'vue';
import {
  Allocation,
  getMyAllocations,
} from '../../apis/allocations/allocations';
import {
  postWithAuth,
  putWithAuth,
  getLoginUser,
  deleteWithAuth,
} from '../../auth0';

const name = ref('');
const share = ref(null);

const { user } = useAuth0();
const loginUser = await getLoginUser();

const allocations = ref<Allocation[]>([]);
const result = await getMyAllocations();
allocations.value = result;

const handleCreate = async () => {
  await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/',
    {
      userId: loginUser!.ID,
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

  const result = await getMyAllocations();
  allocations.value = [...result];
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
  const result = await getMyAllocations();
  allocations.value = [...result];
};

const handleDelete = async (id: number) => {
  await deleteWithAuth(
    import.meta.env.VITE_API_URL + '/auth/allocations/' + id,
    {}
  ).then(() => {
    allocations.value = allocations.value.filter((a) => a.ID! !== id);
  });
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="allocation in allocations" :key="allocation.ID">
              <td>{{ allocation.ID }}</td>
              <td><input type="text" v-model="allocation.Name" /></td>
              <td><input type="number" v-model="allocation.Share" /></td>
              <td><input type="checkbox" v-model="allocation.IsActive" /></td>
              <td>
                <a class="button" @click="handleDelete(allocation.ID)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <button class="button">Update</button>
      </form>
    </section>
  </div>
</template>
