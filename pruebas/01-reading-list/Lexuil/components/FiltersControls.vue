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
      <select className="select select-bordered w-full max-w-lg mt-2">
        <option selected>Todos</option>
        <option>Terror</option>
        <option>Fantasia</option>
      </select>
    </label>
  </div>
</template>
