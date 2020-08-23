import React, {useState} from 'react';
import useSWR from 'swr'
import {fetcher} from './domain/xebia'
import BookCard from 'component/BookCard'
import Header from 'layout/Header'

export interface Book {
  isbn: string
  title: string
  price: number
  cover: string
  synopsis: Array<string>
}

export interface Offer {
  type: "percentage" | "minus" | "slice"
  value : number
  sliceValue?: number
}

function App() {
  const [cart, setCart] = useState<Array<Book>>([])

  const {data: books, error: errBook} = useSWR<Array<Book>, object>('/books', fetcher)

  const [search, setSearch] = useState<string>('')
  const booksToDisplay: Array<Book> | undefined = books?.filter(book =>
    book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    || book.isbn.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <>
      <Header cart={cart}/>
      <main>
        <div className="my-5 mx-auto w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
            Rechercher un livre
          </label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search" type="text" placeholder="Titre, ISBN, ..."/>
        </div>
        <div className="mx-auto w-2/3">
          {booksToDisplay?.map(book => <BookCard key={book.isbn} cart={cart} setCart={setCart} book={book}/>)}
        </div>
      </main>
    </>
  );
}

export default App;
