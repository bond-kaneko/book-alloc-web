<script setup lang="ts">
import { ref } from 'vue';
import {
  Allocation,
  getMyAllocations,
} from '../../../apis/allocations/allocations';
import {
  deleteWithAuth,
  getLoginUser,
  getWithAuth,
  postWithAuth,
  putWithAuth,
} from '../../../auth0';

const result = await getLoginUser();

const ReadingStatus = {
  Want: 0,
  Reading: 1,
  Complete: 2,
  Stash: 3,
};
type ReadingStatus = typeof ReadingStatus[keyof typeof ReadingStatus];

const toString = (status: ReadingStatus): string => {
  switch (status) {
    case ReadingStatus.Want:
      return '読みたい';
    case ReadingStatus.Reading:
      return '読んでる';
    case ReadingStatus.Complete:
      return '読んだ';
    case ReadingStatus.Stash:
      return '中断';
    default:
      return '';
  }
};

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

const readingExperiences = ref<ReadingExperience[]>([]);

const getMyReadingExperiences = async () => {
  const response = await getWithAuth(
    import.meta.env.VITE_API_URL + '/auth/reading-experiences/' + result!.ID
  );
  const data = await response.data;
  return data;
};
await getMyReadingExperiences().then((data) => {
  readingExperiences.value = [];
  data.forEach((item: ReadingExperience) => {
    readingExperiences.value.push(item);
  });
});

const myAllocations = await getMyAllocations();

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
  readingExperiences.value.push(data);
};

const handleDelete = async (id: number) => {
  const response = await deleteWithAuth(
    import.meta.env.VITE_API_URL + '/auth/reading-experiences/' + id,
    {}
  ).then(() => {
    readingExperiences.value = readingExperiences.value.filter(
      (item: ReadingExperience) => item.ID! !== id
    );
  });
};

const handleUpdate = async () => {
  const response = await putWithAuth(
    import.meta.env.VITE_API_URL + '/auth/reading-experiences/',
    readingExperiences.value,
    {}
  );
  readingExperiences.value = [];
  response.data.forEach((item: ReadingExperience) => {
    readingExperiences.value.push(item);
  });
};
</script>

<template>
  <div>
    <section class="section">
      <h1>Reading History</h1>
      <form @submit.prevent="handleCreate">
        <div>
          <label for="allocationId">Allocation</label>
          <select
            name="allocationId"
            v-model="newReadingExperience.AllocationId"
          >
            <option v-for="allocation in myAllocations" :value="allocation.ID">
              {{ allocation.Name }}
            </option>
          </select>
        </div>
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="newReadingExperience.Title" />
        </div>
        <div>
          <label for="status">Status: </label>
          <select id="status" v-model="newReadingExperience.Status">
            <option
              v-for="status in Object.values(ReadingStatus)"
              :value="status"
              :selected="status === ReadingStatus.Reading"
            >
              {{ toString(status) }}
            </option>
          </select>
        </div>
        <button class="button">New</button>
      </form>
    </section>
    <form @submit.prevent="handleUpdate">
      <table class="table">
        <tr>
          <th>ID</th>
          <th>AllocationId</th>
          <th>Title</th>
          <th>Status</th>
          <th>StartdAt</th>
          <th>EndAt</th>
          <th>Actions</th>
        </tr>
        <tr v-for="experience in readingExperiences">
          <td>{{ experience.ID }}</td>
          <td>
            <select v-model="experience.AllocationId">
              <option
                v-for="allocation in myAllocations"
                :value="allocation.ID"
                :selected="allocation.ID === experience.ID"
              >
                {{ allocation.Name }}
              </option>
            </select>
          </td>
          <td>
            <input type="text" v-model="experience.Title" />
          </td>
          <td>
            <select v-model="experience.Status">
              <option
                v-for="status in Object.values(ReadingStatus)"
                :value="status"
                :selected="status === experience.Status"
              >
                {{ toString(status) }}
              </option>
            </select>
          </td>
          <td>{{ experience.StartAt }}</td>
          <td>{{ experience.EndAt }}</td>
          <td>
            <a class="button" @click="handleDelete(experience!.ID!)">Delete</a>
          </td>
        </tr>
      </table>
      <button type="submit" class="button">Update</button>
    </form>
  </div>
</template>
