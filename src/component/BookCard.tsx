import React from 'react';
import {Book} from 'App'

interface Props {
  book: Book
}

const BookCard: React.FC<Props> = ({book}) => (
  <div className="max-w-sm w-full lg:max-w-full lg:flex mb-3">
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style={{backgroundImage: `url(${book.cover})`}} title={book.title} />
    <div
      className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <div className="text-gray-900 font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.synopsis[0]}</p>
      </div>
    </div>
  </div>
)

export default BookCard