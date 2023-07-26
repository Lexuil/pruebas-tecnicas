<template>
  <main class="max-w-7xl mx-auto">
    <h2>{{ books.length }} libros disponibles</h2>

    <FiltersControls />
    <BooksList />
  </main>
</template>

<script setup>
const books = ref([])
function updateBooks (newValue) {
  books.value = newValue
}
provide('books', {
  books,
  updateBooks
})

const { getBooks } = useGetBooks()
books.value = await getBooks()
</script>
