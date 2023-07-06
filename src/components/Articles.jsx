/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'Cadastres',
      description: 'Consulter, télécharger et intégrer facilement les données cadastrales. Le cadastre est un ensemble de plans et fichiers administratifs qui recensent toutes les propriétés immobilières situées dans chaque commune française, et qui en consigne la valeur afin de servir de base de calcul à certains impôts.',
      imageSrc: 'https://tse1.mm.bing.net/th?id=OIP.nE2DiLYzFXaGcLPk0-y9ZgHaFF&pid=Api',
      imageAlt: 'Image d\'un cadastre',
      href: 'https://cadastre.data.gouv.fr/',
    },
    {
      name: 'Investir dans les passoires thermiques, bonne ou mauvaise idée ?',
      description: 'Face à la baisse du pouvoir d\'achat immobilier, certains acquéreurs hésitent à se tourner vers des biens décotés, à savoir des passoires thermiques. Une stratégie qui peut s\'avérer payante, à condition d\'être très attentifs.',
      imageSrc: 'https://tse4.mm.bing.net/th?id=OIP.bsZVR-AoTuVFOkrqCiuwyAHaEG&pid=Api',
      imageAlt: 'Image d\'une passoire thermique',
      href: 'https://www.bfmtv.com/immobilier/achat-vente/dans-quelles-regions-investir-dans-une-passoire-thermique-est-le-plus-rentable_AV-202307060378.html',
    },
    {
      name: 'Comment réussir son investissement immobilier en 2023 ?',
      description: ' Si l’investissement locatif peut paraître technique, c’est pourtant une manière sûre et efficace de sécuriser son argent tout en obtenant des revenus réguliers… À condition de se poser les bonnes questions et de bien définir son projet.',
      imageSrc: 'https://res.cloudinary.com/pretto-fr/image/upload/q_auto,ar_16:9,c_fill,f_webp,w_1024/website/highlight/etapes-investissement-locatif',
      imageAlt: 'Imade de visualisation',
      href: 'https://www.pretto.fr/investissement-locatif/investissement-immobilier/?msclkid=3dba8c2610d212c6b8dfe880a12f18c9&utm_source=bing&utm_medium=cpc&utm_campaign=1%3A%20DS%20%7C%202%3A%20Acq%20%7C%203%3A%20DSA%20-%20ROAS%20%7C%204%3A%20FR&utm_term=https%3A%2F%2Fwww.pretto.fr%2Finvestissement-locatif%2F&utm_content=1%3A%20Investissement%20locatif',
    },
  ]
  
export default function Articles() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 lg:max-w-none lg:py-32">
            <h1 className="text-5xl font-bold text-gray-900">Articles</h1>
            <p>Les derniers articles pour t'aider à comprendre le monde de l'investissement immobilier.</p>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h2 className="mt-6 text-lg text-gray-900 font-bold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h2>
                  <p className="text-base font-semibold text-gray-700">{callout.description}</p>
                </div>
              ))}
            </div>
            <br />
            <a href="#" className="my-10">Lire la suite des articles &#8594;</a>
          </div>
        </div>
      </div>
    )
  }
  