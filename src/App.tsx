import React, {useEffect, useState} from 'react';
import useSWR from 'swr'
import {DOMAIN_URL, fetcher} from 'domain/xebia'
import BookCard from 'component/BookCard'
import Header from 'layout/Header'
import {findBestOffer} from 'utils/offer'
import CartFooter from 'layout/CartFooter'
import {Book} from 'models/Book'

function App() {
  const [cart, setCart] = useState<Array<Book>>([])

  const {data: books} = useSWR<Array<Book>, object>('/books', fetcher)

  const [price, setPrice] = useState<number>(0)
  // Fetch offers when cart change
  useEffect(() => {
    fetch(`${DOMAIN_URL}/books/${cart.map(b => b.isbn).join(',')}/commercialOffers`)
      .then(res => res.json())
      .then(res => setPrice(findBestOffer(cart, res.offers)[1]))
    if (!cart.length) setPrice(0)
  }, [cart])

  const [search, setSearch] = useState<string>('')
  const filteredBooks: Array<Book> | undefined = books?.filter(book =>
    book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    || book.isbn.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className=" flex flex-col h-screen">
      <Header cart={cart} price={price}/>
      <main className="flex-grow overflow-scroll">
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
          {filteredBooks?.map(book => <BookCard key={book.isbn} cart={cart} setCart={setCart} book={book}/>)}
        </div>
      </main>
      <CartFooter cart={cart} price={price}/>
    </div>
  );
}

export default App;
