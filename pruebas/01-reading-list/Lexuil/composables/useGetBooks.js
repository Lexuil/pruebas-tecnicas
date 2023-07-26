export default function () {
  const getBooks = async () => {
    const config = useRuntimeConfig()
    const response = await fetch(`${config.public.baseUrl}/books.json`)
    return (await response.json()).library
  }

  return {
    getBooks
  }
}
