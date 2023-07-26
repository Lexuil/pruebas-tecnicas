export default function () {
  const getBooks = async () => {
    const config = useRuntimeConfig()
    const response = await fetch(`${config.public.baseUrl}/books.json`)
    return (await response.json()).library
  }

  const getGenres = async () => {
    const books = await getBooks()
    const genres = new Set()
    for (const bookData of books) {
      genres.add(bookData.book.genre)
    }
    return genres
  }

  const filterBooks = async (genre) => {
    const books = await getBooks()
    const filteredBooks = books.filter((book) => book.book.genre === genre)
    return filteredBooks
  }

  return {
    getBooks,
    getGenres,
    filterBooks
  }
}
