<template>
  <ul
    v-if="books.length > 0"
    class="grid grid-cols-auto-fit justify-items-center gap-5 my-10"
  >
    <li
      v-for="({ book }) in books"
      :key="book.ISBN"
      class="h-96 w-auto"
      @click="updateReadingList([...readingList, book])"
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
const { books: allBooks } = inject(
  'books',
  { books: [] }
)
const { readingList, updateReadingList } = inject(
  'readingList',
  { readingList: [], updateReadingList: () => {} }
)
const books = computed(() => {
  return allBooks.value.filter(({ book }) => {
    return !readingList.value.find((item) => item.ISBN === book.ISBN)
  })
})
</script>

<script>
export default {
  name: 'BooksList'
}
</script>
