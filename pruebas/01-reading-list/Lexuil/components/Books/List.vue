<template>
  <ul
    v-if="books !== undefined && books.length > 0"
    class="grid grid-cols-auto-fit gap-5 my-10"
  >
    <li
      v-for="({ book }, index) in books"
      :key="index"
    >
      <img
        :src="book.cover"
      >
    </li>
  </ul>

  <BooksListLoading v-else />
</template>

<script setup>
const books = inject('books')
</script>

<script>
export default {
  name: 'BooksList'
}
</script>
