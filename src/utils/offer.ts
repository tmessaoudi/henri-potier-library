import {Book, Offer} from 'models/Book'

export const applyOffer: { [id: string]: (price: number, offer: Offer) => number } = {
  "percentage": (price: number, offer: Offer) => price * (100 - offer.value) / 100,
  "minus": (price: number, offer: Offer) => price - offer.value,
  "slice": (price: number, offer: Offer) => price >= offer.sliceValue! ? price - offer.value : price

}


export const sortOffer = (cart: Array<Book>, offers: Array<Offer>) : Array<[Offer, number]> => {
  const sum = cart
    .map(book => book.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue)


  return offers.sort((a, b) => applyOffer[a.type](sum, a) - applyOffer[b.type](sum, b))
    .map(offer => (
      [
        offer,
        applyOffer[offer.type](sum, offer)
      ])
    )
}

export const findBestOffer = (cart: Array<Book>, offers: Array<Offer>) : [Offer, number] => sortOffer(cart, offers)[0]





