import React from 'react';
import {Book} from 'models/Book'

interface Props {
  book: Book

  cart: Array<Book>
  setCart(books: Array<Book>): void
}

const BookCard: React.FC<Props> = ({book, cart, setCart}) => {
  const add = () => setCart([...cart, book])
  const remove = () => setCart(cart.filter(b => b.isbn !== book.isbn))
  const isInCart: boolean = !!cart.find(b => b.isbn === book.isbn)

  return (
    <div className="h-56 max-w-full flex mb-3">
      <img
        src={book.cover} alt={book.title}
        className="h-auto w-48 flex-none bg-cover  rounded-t-none rounded-l text-center overflow-hidden"/>
      <div
        className={`border-r border-b border-l border-gray-400 border-l-0 border-t ${isInCart ? 'bg-gray-300':'bg-white'} rounded-b lg:rounded-r p-4 leading-normal flex`}>
        <div className="flex flex-col flex-grow justify-between">
          <div className="text-gray-900 font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base mb-8 text-ellipsis">{book.synopsis.join(' ')}</p>
          <p className="text-xl text-gray-800 leading-3 font-semibold"> Prix : {book.price} €</p>
        </div>
        <div className=" pl-10 flex flex-col justify-around">
          <button onClick={isInCart ? remove : add}>
            {isInCart ?
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-12 text-center">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"/>
              </svg> :
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-12 text-center">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"/>
              </svg>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard