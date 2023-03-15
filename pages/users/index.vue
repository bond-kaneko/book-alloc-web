<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PieChart } from './pieChart'

const pieChartRef = ref<HTMLCanvasElement | null>(null)
const tipRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if (pieChartRef.value != null && tipRef.value != null) {
    const canvas = pieChartRef.value
    const tip = tipRef.value

    const pieChart = new PieChart(canvas, tip)
    pieChart.render()
  }
})
</script>

<template>
  <div class="container">
    <div class="notification is-link is-light">
      ランディングページです。<br />ポートフォリオの円グラフと、読書中の本を表示します。
    </div>
    <section class="section"><h1 class="title">ページタイトル</h1></section>
    <section class="section">
      <canvas
        ref="pieChartRef"
        width="200"
        height="200"
        values="[20, 40, 40]"
        labels='["Not Good", "Good", "Very Good"]'
      >
      </canvas>
      <canvas ref="tipRef" width="100" height="25"></canvas>
    </section>
    <section class="section">
      <h2 class="title">読んでる本</h2>
      <ul class="columns is-desktop">
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img
                  src="http://image.gihyo.co.jp/assets/images/cover/2022/9784297131111.jpg"
                />
              </figure>
            </div>
          </div>
        </li>
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img
                  src="https://gihyo.jp/assets/images/cover/2023/thumb/TH320_9784297133986.jpg"
                />
              </figure>
            </div>
          </div>
        </li>
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img src="https://www.iwanami.co.jp//images/book/621636.jpg" />
              </figure>
            </div>
          </div>
        </li>
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img
                  src="https://gihyo.jp/assets/images/cover/2023/thumb/TH320_9784297134723.jpg"
                />
              </figure>
            </div>
          </div>
        </li>
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img src="https://www.iwanami.co.jp//images/book/621803.jpg" />
              </figure>
            </div>
          </div>
        </li>
        <li class="column">
          <div class="card mx-3">
            <div class="card-image">
              <figure class="image is-4by5">
                <img
                  src="https://gihyo.jp/assets/images/cover/2023/thumb/TH320_9784297134471.jpg"
                />
              </figure>
            </div>
          </div>
        </li>
      </ul>
      <div class="link is-flex is-justify-content-center">
        <button class="button is-size-3">もっと見る</button>
      </div>
    </section>
  </div>
</template>
