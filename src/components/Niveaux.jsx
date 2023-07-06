const people = [
    {
      name: 'Padawan',
      role: 'Niveau 1 - 1XP à 100XP',
      imageUrl:
        'https://www.liveabout.com/thmb/62CoLXqCaCTlYOYr8np2Sgjru2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-32565_R_8x10-56a83bdc5f9b58b7d0f1b389.jpg',
    },
    
    {
      name: 'Chevalier Jedi',
      role: 'Niveau 2 - 101XP à 500XP',
      imageUrl:
        'https://tse2.mm.bing.net/th?id=OIP.pKxw5r6fzEedyxw37rAEJAHaLH&pid=Api',
    },
    
    {
      name: 'Maitre Jedi',
      role: 'Niveau 3 - 501XP à 1000XP',
      imageUrl:
        'https://tse3.mm.bing.net/th?id=OIP.pt7fzYdGy75SEBo8rHq9DwHaGr&pid=Api',
    },
    
    {
      name: 'Maitre Yoda',
      role: 'Niveau 4 - à partir de 1001XP',
      imageUrl:
        'https://tse4.mm.bing.net/th?id=OIP.mJcKUs6OBLh3bW6sHl_o9AHaI4&pid=Api',
    },
    
]
import { CalendarDaysIcon, ArrowTrendingUpIcon, BookOpenIcon, CreditCardIcon, ChatBubbleLeftRightIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Régularité',
    description:
      'Connecte-toi tous les jours pour suivre tes projets ou en découvrir de nouveaux.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Prise de riques',
    description:
      'Tu dois dénicher les meilleurs projets, ce qui te rapporteront le plus. Investit dans de petits projets pouvant devenir des perles rares.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Rentabilité',
    description:
      'Tu es là pour fructifier ton argent, gagne des points pour chaque retour sur investissement positif.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Investissement',
    description:
      'Investir est au coeur de tout ici, dépose de l\'argent sur ton compte et place le dans des biens immobiliers pour gagner de l\'XP.',
    icon: CreditCardIcon,
  },
  {
    name: 'Discussion',
    description:
      'Profite de la possibilité de discuter avec d\'autres investiteurs pour développer ton réseau et te renseigner sur les meilleurs projets.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Apprentissage',
    description:
      'Tout ton savoir n\'est pas inné... Lit des articles pour consolider tes connaissances et gagner de l\'XP',
    icon: BookOpenIcon,
  },
]
  
  export default function Niveaux() {
    return (
      <div className="bg-white py-24 sm:py-32">
        




        <div className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Gagner de l'XP</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Développe tes compétences. <br /> Obtient de l'XP.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Beaucoup de compétences sont importantes dans le monde de l'investissement immobilier. 
                Notre système de niveau va te permettre de mesurer ton avancement et te permettra de progresser dans diverses compétences.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>




        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-16">
          <div className="max-w-2xl mr-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Classement des niveaux</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Durant tes différents investissements tu gagneras de l'expériance, nous voulons la matérialisée avec 
              notre système de badge. Chaque action te permettra de gagner de l'XP pour augmenter ton rang au sein de la galaxie des lumières.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>



      
    )
  }
  