<template>
  <ul
    v-if="books.length > 0"
    class="grid grid-cols-auto-fit justify-items-center gap-5 my-10"
  >
    <li
      v-for="({ book }, index) in books"
      :key="index"
      class="h-96 w-auto"
    >
      <img
        :src="book.cover"
        class="object-cover h-full w-full"
      >
    </li>
  </ul>

  <BooksListLoading v-else />
</template>

<script setup>
const { books } = inject(
  'books',
  { books: [], updateBooks: () => {} }
)
</script>

<script>
export default {
  name: 'BooksList'
}
</script>
