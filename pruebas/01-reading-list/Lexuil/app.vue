<template>
  <header class="my-5">
    <h1 class="text-center">
      Lista de lectura
    </h1>
  </header>
  <main class="max-w-7xl mx-auto">
    <h2>{{ books?.length }} libros disponibles</h2>

    <!-- Filters -->
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
        <select className="select select-bordered w-full max-w-lg mt-2">
          <option selected>Todos</option>
          <option>Terror</option>
          <option>Fantasia</option>
        </select>
      </label>
    </div>

    <!-- Book list -->
    <ul
      v-if="books"
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

    <!-- Loading books -->
    <div v-else>
      <h2>Cargando libros...</h2>
    </div>
  </main>
</template>

<script setup>
const books = ref([])

fetch('/books.json')
  .then((response) => response.json())
  .then((data) => {
    books.value = data.library
  })
</script>
