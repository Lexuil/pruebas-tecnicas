<template>
  <main class="max-w-7xl mx-auto">
    <h2>{{ books?.length }} libros disponibles</h2>

    <FiltersControls />
    <BooksList />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const books = ref([])
provide('books', books)

fetch(`${config.public.baseUrl}/books.json`)
  .then((response) => response.json())
  .then((data) => {
    books.value = data.library
  })
</script>
