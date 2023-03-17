<script setup lang="ts">
import DoughnutChart from "~/components/charts/DoughnutChart.vue";
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
</script>

<template>
  <div class="container">
    <h1 class="title">予定ポートフォリオ</h1>
    <dev-message message="ポートフォリオの変更を行う画面です。"></dev-message>
    <section class="section">
      <div class="is-flex w-100">
        <div style="flex-basis: 70%;">
          <doughnut-chart :labels="labels" :datasets="planDatasets"></doughnut-chart>
        </div>
        <div style="flex-basis: 30%;">
          <form>
            <table class="table">
              <thead>
                <tr>
                  <th>カテゴリ名</th>
                  <th>配分</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="control"><input class="input" value="技術書"></td>
                  <td class="control"><input class="input" value="30"></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td class="control"><input class="input" value="ビジネス書"></td>
                  <td class="control"><input class="input" value="50"></td>
                  <td>
                    <fa :icon="['fas', 'minus']"></fa>
                  </td>
                </tr>
                <tr>
                  <td class="control"><input class="input" value="古典"></td>
                  <td class="control"><input class="input" value="20"></td>
                  <td>
                    <fa :icon="['fas', 'plus']"></fa>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="is-flex is-justify-content-end">
              <button type="submit" class="button mr-0">保存</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
