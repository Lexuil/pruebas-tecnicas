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
  localStorage.setItem('readingList', JSON.stringify(newValue))
}
provide('readingList', {
  readingList,
  updateReadingList
})

onMounted(() => {
  const storedReadingList = localStorage.getItem('readingList')

  if (storedReadingList) {
    readingList.value = JSON.parse(storedReadingList)
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'readingList') {
      readingList.value = JSON.parse(event.newValue)
    }
  })
})
</script>
