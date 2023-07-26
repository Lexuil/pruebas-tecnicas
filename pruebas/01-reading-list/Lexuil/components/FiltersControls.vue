<template>
  <div class="flex items-center space-x-16 border mt-5 p-5">
    <h3>Filtros</h3>
    <div class="max-w-sm">
      <label>
        Numero de páginas
        <input
          id="numberOfPages"
          type="range"
          min="{0}"
          max="100"
          value="25"
          className="range mt-2"
          step="25"
        >
      </label>
    </div>

    <label>
      Genero
      <select
        v-model="selectedGenre"
        className="select select-bordered w-full max-w-lg mt-2"
      >
        <option
          value="Todos"
          selected
        >
          Todos
        </option>
        <option
          v-for="genre in genres"
          :key="genre"
          :value="genre"
        >
          {{ genre }}
        </option>
      </select>
    </label>
  </div>
</template>

<script setup>
const genres = ref([])
const selectedGenre = ref('Todos')
const { updateBooks } = inject(
  'books',
  { books: [], updateBooks: () => {} }
)
const { getBooks, getGenres, filterBooks } = useGetBooks()

genres.value = await getGenres()

watch(selectedGenre, () => {
  const filterValue = selectedGenre.value

  if (filterValue === 'Todos') {
    getBooks()
      .then((books) => {
        updateBooks(books)
      })
  } else {
    filterBooks(filterValue)
      .then((filteredBooks) => {
        updateBooks(filteredBooks)
      })
  }
})
</script>
