<template>
  <div class="fixed top-0 -right-44 hover:right-0 h-screen bg-gradient-to-l from-base-100 p-5 w-64 overflow-y-auto">
    <ul class="flex flex-col items-center space-y-5 mt-10">
      <li
        v-for="book in readingList"
        :key="book.ISBN"
        class="w-40 h-auto"
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
