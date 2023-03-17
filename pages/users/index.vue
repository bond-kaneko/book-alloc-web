<script setup lang="ts">
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import DevMessage from "~/components/dev/DevMessage.vue";

const redCode: string = 'rgb(255, 99, 132)'
const blueCode: string = 'rgb(54, 162, 235)'
const yellowCode: string = 'rgb(255, 205, 86)'

const labels = ['技術書', 'ビジネス書', '古典']

type Dataset = {
  label: string,
  data: number[],
  backgroundColor: string[],
  hoverOffset: number,
};

const planDatasets: Dataset[] = [
  {
    label: '予定',
    data: [30, 50, 20],
    backgroundColor: [redCode, blueCode, yellowCode],
    hoverOffset: 4
  },
]

const actualDatasets: Dataset[] = [
  {
    label: '実際',
    data: [80, 10, 10],
    backgroundColor: [redCode, blueCode, yellowCode],
    hoverOffset: 4
  },
]
</script>

<template>
  <div class="container">
    <dev-message message="ランディングページです。ポートフォリオの円グラフと、読書中の本を表示します。"></dev-message>
    <section class="section"><h1 class="title">ページタイトル</h1></section>
    <dev-message message="読書ポートフォリオの予実を表示します。グラフをクリックすると、該当カテゴリの本画面に移動します。試しに「技術書」をクリックしてみてください。"></dev-message>
    <section class="section is-flex">
      <div style="flex-basis: 50%;">
        <div class="is-flex">
          <h2 class="subtitle">予定</h2>
          <NuxtLink to="/allocations" class="ml-2">編集</NuxtLink>
        </div>
        <doughnut-chart :labels="labels" :datasets="planDatasets"></doughnut-chart>
      </div>
      <div style="flex-basis: 50%;">
        <h2 class="subtitle">実際</h2>
        <doughnut-chart :labels="labels" :datasets="actualDatasets"></doughnut-chart>
      </div>
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
                <img src="https://www.iwanami.co.jp//images/book/621636.jpg"/>
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
                <img src="https://www.iwanami.co.jp//images/book/621803.jpg"/>
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
