<script setup lang="ts">
import {onMounted, ref} from 'vue'
const Chart = require('chart.js')

const props = defineProps({
  labels: Array,
  datasets: Array
})

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvasRef.value != null) {
    const canvas = canvasRef.value

    // eslint-disable-next-line no-new
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: props.labels,
        datasets: props.datasets,
      },
    })
  }
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>
