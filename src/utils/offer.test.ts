import {applyOffer, findBestOffer, sortOffer} from 'utils/offer'
import {Book, Offer} from 'models/Book'


describe("should apply correctly the offer", () => {

  const percentage: Offer = {"type": "percentage", "value": 5}
  const minus: Offer = {"type": "minus", "value": 15}
  const slice: Offer = {"type": "slice", "sliceValue": 100, "value": 12}

  test('percentage', () => {
    expect<number>(applyOffer['percentage'](100, percentage))
      .toBe(95)
  })

  test('minus', () => {
    expect<number>(applyOffer['minus'](100, minus))
      .toBe(100 - 15)
  })

  test('slice', () => {
    expect<number>(applyOffer['slice'](100, slice))
      .toBe(100 - 12)

    expect<number>(applyOffer['slice'](99, slice))
      .toBe(99)
  })

})

describe('should find the best offer', () => {

  const offers: Array<Offer> = [
    {"type": "percentage", "value": 5},
    {"type": "minus", "value": 15},
    {"type": "slice", "sliceValue": 100, "value": 12}
  ]

  const cart: Array<Book> = [
    {
      "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
      "title": "Henri Potier à l'école des sorciers",
      "price": 35,
      "cover": "http://henri-potier.xebia.fr/hp0.jpg",
      "synopsis": [
        "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
        "Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
        "Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine."
      ]
    },
    {
      "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
      "title": "Henri Potier et la Chambre des secrets",
      "price": 30,
      "cover": "http://henri-potier.xebia.fr/hp1.jpg",
      "synopsis": [
        "Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d'ignorer cet avertissement. Le jour de son départ pour l'école, il se retrouve bloqué avec Ron Weasley à la gare de King's Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.",
        "Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d'un élève moldu de l'école. Dès la première attaque, un message sanglant apparaît sur l'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l'identité du coupable et protéger les élèves contre de nouvelles agressions."
      ]
    }
  ]

  test('should sort correctly the offer', () => {
    expect<Array<[Offer, number]>>(sortOffer(cart, offers))
      .toStrictEqual([
        [
          {
            "type": "minus",
            "value": 15,
          },
          50
        ],
        [
          {
            "type": "percentage",
            "value": 5,
          },
          61.75
        ],
        [
          {
            "sliceValue": 100,
            "type": "slice",
            "value": 12,
          },
          65
        ]
      ])
  })

  test('should find the best offer and the final price', () => {
    expect<[Offer, number]>(findBestOffer(cart, offers))
      .toStrictEqual([
        {
          "type": "minus",
          "value": 15,
        },
        50
      ])
  })

})