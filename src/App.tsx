import React from 'react';

function App() {
  return (
    <>
      <nav className="bg-gray-300">
        <h1 className="text-center text-4xl font-bold">La bibliothèque d'Henri Potier</h1>
      </nav>
      <main>
        <div className="mt-5 mx-auto w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
          Rechercher un livre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Titre, ISBN, ..." />
        </div>
      </main>
    </>
  );
}

export default App;
