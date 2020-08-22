export const {
  DOMAIN_URL = 'http://henri-potier.xebia.fr'
} = process.env

export const fetcher = (resourceUrl: string) => fetch(`${DOMAIN_URL}${resourceUrl}`).then(res => res.json())