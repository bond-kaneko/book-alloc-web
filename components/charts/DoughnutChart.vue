<script setup lang="ts">
import { onMounted, ref } from 'vue'

const Chart = require('chart.js')
const canvasRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if (canvasRef.value != null) {
    const canvas = canvasRef.value!

    // eslint-disable-next-line no-new
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    })
  }
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>
