<template>
  <div class="mx-10">
    <header class="my-5">
      <h1 class="text-center">
        Lista de lectura
      </h1>
    </header>
    <slot />

    <ReadingList />
  </div>
</template>

<script setup>
const readingList = ref([])
function updateReadingList (newValue) {
  readingList.value = newValue
}
provide('readingList', {
  readingList,
  updateReadingList
})
</script>
