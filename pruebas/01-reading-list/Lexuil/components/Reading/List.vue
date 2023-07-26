<template>
  <div class="fixed bottom-0 w-full bg-gradient-to-t from-base-100 p-5 h-28 hover:h-96 overflow-y-auto">
    <h2 class="text-center">
      Lista de lectura
    </h2>

    <ul class="grid grid-cols-auto-fit justify-items-center gap-5 my-10">
      <li
        v-for="book in readingList"
        :key="book.ISBN"
        class="h-56 w-auto"
        @click="removeBookFromReadingList(book)"
      >
        <img
          :src="book.cover"
          class="object-cover h-full w-full"
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const { readingList, updateReadingList } = inject(
  'readingList',
  { readingList: [] }
)

const removeBookFromReadingList = (book) => {
  updateReadingList(
    readingList.value.filter(
      (item) => item.ISBN !== book.ISBN
    )
  )
}
</script>

<script>
export default {
  name: 'ReadingList'
}
</script>
