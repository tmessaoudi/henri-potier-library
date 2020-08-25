import React from 'react';
import {Book} from 'models/Book'

interface Props {
  cart: Array<Book>
  price: number
}

const CartFooter: React.FC<Props> = ({cart, price}) => {
  if (!cart.length) return null
  return (
    <footer className="bg-gray-700 mx-auto w-2/3 text-center rounded-t-lg ">
      <h1 className="text-2xl text-center text-white font-italic">PANIER</h1>
      <div className="bg-gray-300 pt-3">
        <ul className="border-b border-black">
          {cart.map(book => <li className="mb-1" key={book.isbn}>
            <strong className="pr-5">{book.title}</strong>
            <em>{book.price}€</em>
          </li>)}
        </ul>

        <p className="text-2xl font-extrabold">Total :
          <span className="line-through p-2">
            {cart.map(b => b.price).reduce((acc, cur) => acc + cur)}
          </span>
          -
          <span className="p-2">{price}€</span>
        </p>

        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Commander
        </button>
      </div>

    </footer>
  )
}

export default CartFooter 