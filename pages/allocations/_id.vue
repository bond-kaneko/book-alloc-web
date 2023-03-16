<script setup lang="ts">
import BookCard from "~/components/books/BookCard.vue";
import DevMessage from "~/components/dev/DevMessage.vue";
</script>

<template>
  <div class="container">
    <h1 class="title">技術書</h1>
    <dev-message message="選択したカテゴリの本が表示されます。左上のアイコンが読書ステータスを表します。"></dev-message>
    <section class="section">
      <ul class="columns is-desktop">
        <li class="column">
          <book-card src="http://image.gihyo.co.jp/assets/images/cover/2022/9784297131111.jpg" status="READING"></book-card>
        </li>
        <li class="column">
          <book-card src="https://gihyo.jp/assets/images/cover/2017/thumb/TH320_9784774187594.jpg" status="READING"></book-card>
        </li>
        <li class="column">
          <book-card src="https://gihyo.jp/assets/images/cover/2005/thumb/TH320_477412222X.jpg" status="WANT"></book-card>
        </li>
        <li class="column">
          <book-card src="https://gihyo.jp/assets/images/cover/2013/thumb/TH320_9784774155395.jpg" status="COMPLETE"></book-card>
        </li>
        <li class="column">
          <book-card src="https://gihyo.jp/assets/images/cover/2012/thumb/TH320_9784774152943.jpg" status="STASH"></book-card>
        </li>
        <li class="column">
          <book-card src="https://gihyo.jp/assets/images/cover/2008/9784774133348.jpg " status="STASH"></book-card>
        </li>
      </ul>
    </section>
  </div>
</template>
