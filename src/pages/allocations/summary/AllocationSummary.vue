<script setup lang="ts">
import { getSummary } from '../../../apis/allocations/allocations';

const summary = await getSummary();
</script>

<template>
  <div class="container">
    <p>summary</p>
    <section class="section">
      <table class="table">
        <tr>
          <th>AllocationId</th>
          <th>Count</th>
        </tr>
        <tr v-for="(value, key) in summary" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>
