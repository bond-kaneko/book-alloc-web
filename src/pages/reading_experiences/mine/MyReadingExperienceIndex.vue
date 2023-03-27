<script setup lang="ts">
import { ref } from 'vue';
import { getLoginUser, getWithAuth, postWithAuth } from '../../../auth0';

const result = await getLoginUser();

enum ReadingStatus {
  Want = '読みたい',
  Reading = '読んでいる',
  Completed = '読んだ',
  Stash = '中断',
}

interface ReadingExperience {
  ID?: number;
  AllocationId: number;
  Title: string;
  Status: ReadingStatus;
  StartAt?: Date;
  EndAt?: Date;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}

const getMyReadingExperiences = async () => {
  const response = await getWithAuth(
    import.meta.env.VITE_API_URL + '/auth/reading-experiences/' + result!.ID
  );
  const data = await response.data;
  return data;
};
const readingExperiences = await getMyReadingExperiences();

const newReadingExperience = ref<ReadingExperience>({
  AllocationId: 0,
  Title: '',
  Status: ReadingStatus.Reading,
});
const handleCreate = async () => {
  const response = await postWithAuth(
    import.meta.env.VITE_API_URL + '/auth/reading-experiences/',
    newReadingExperience.value
  );
  const data = await response.data;
  return data;
};
</script>

<template>
  <div>
    <section class="section">
      <h1>Reading History</h1>
      <form @submit.prevent="handleCreate">
        <div>
          <label for="allocationId">AllocationId: </label>
          <input
            id="allocationId"
            type="number"
            v-model="newReadingExperience.AllocationId"
          />
        </div>
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="newReadingExperience.Title" />
        </div>
        <div>
          <label for="status">Status: </label>
          <select id="status" v-model="newReadingExperience.Status">
            <option
              v-for="status in Object.entries(ReadingStatus)"
              :value="status[0]"
            >
              {{ status[1] }}
            </option>
          </select>
        </div>
        <button class="button">New</button>
      </form>
    </section>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>AllocationId</th>
        <th>Title</th>
        <th>Status</th>
        <th>StartdAt</th>
        <th>EndAt</th>
      </tr>
      <tr v-for="experience in readingExperiences">
        <td>{{ experience.ID }}</td>
        <td>{{ experience.AllocationId }}</td>
        <td>{{ experience.Title }}</td>
        <td>{{ experience.Status }}</td>
        <td>{{ experience.StartAt }}</td>
        <td>{{ experience.EndAt }}</td>
      </tr>
    </table>
  </div>
</template>
