import React from 'react';
import {Book} from 'models/Book'

interface Props {
  cart: Array<Book>
  price: number
}

const Header: React.FC<Props> = ({cart, price}) => (
  <header className="bg-gray-300 flex justify-around">
    <div/>
    <h1 className="text-center text-4xl font-bold">La bibliothèque d'Henri Potier</h1>
    <div className="flex p-3">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
        <path
          d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
      <span className="pl-2 text-2xl">{cart.length}</span>
      <span className="pl-2 text-2xl">{price}€</span>
    </div>
  </header>
)


export default Header 