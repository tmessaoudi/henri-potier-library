export interface Book {
  isbn: string
  title: string
  price: number
  cover: string
  synopsis: Array<string>
}

export interface Offer {
  type: "percentage" | "minus" | "slice"
  value: number
  sliceValue?: number
}