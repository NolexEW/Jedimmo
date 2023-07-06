import { BanknotesIcon, CheckIcon } from '@heroicons/react/20/solid'

const includedFeaturesP1 = [
  '✔️ Possibilité d\'investir',
  '❌ Commission de 10% sur l\'investissement',
  '❌ Pas de point de fidélité',
  '❌ Pas d\'outils de simulation',
]

const includedFeaturesP2 = [
  '✔️ Possibilité d\'investir',
  '❌ Commission de 5% sur l\'investissement',
  '✔️ Programme de fidélité',
  '❌ Pas d\'outils de simulation',
]

const includedFeaturesP3 = [
  '✔️ Possibilité d\'investir',
  '✔️ Commission de 2% sur l\'investissement',
  '✔️ Programme de fidélité',
  '✔️ Outils de simulation',
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <div className="flex justify-center mb-10">
            <BanknotesIcon className="h-12 w-12"/>
          </div>
        
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les différents abonnements</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
          

            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Plan gratuit</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              L'offre parfaite pour découvrir notre gamme de produit et nos soutions ! 
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Ce qu'il y a de compris</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeaturesP1.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Juste un formulaire d'inscription!</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">0€</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  S'inscrire
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Simple et sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Plan standard</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              L'offre pour commencer à investir sérieusements avec un accès à notre simulation à moyen terme.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Ce qu'il y a de compris</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeaturesP2.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Payement mensuel automatisé</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">15.90€</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  S'inscrire
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Plan premium</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              L'ensemble de notre technologie de simulation pour investir efficacement.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Ce qu'il y a de compris</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeaturesP3.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Payement mensuel automatisé</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">29.90€</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  S'inscrire
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Simple et sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
