export default function Details() {
    return (
        <main className="flex justify-around">
            <div className="w-6/12 py-10">
                <img src="https://tse3.mm.bing.net/th?id=OIP.FYmU-9FCwRhMrXyGG8VojgHaE7&pid=Api" alt="Image de présentation du bien" className="w-full"/>
                <div className="rounded-md bg-blue-50 px-3 py-2 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-5 w-full">
                    {/* Infos - Description */}
                    <h1 className="text-2xl mb-2">Informations</h1>
                    <p>Prix total : <span className="font-bold">100 000</span> €</p>
                    <p>Prix/m² : <span className="font-bold">2 000</span> €/m²</p><br />
                    <p>Surface totale : <span className="font-bold">50</span> m²</p>
                    <p>Nombre de pièces : <span className="font-bold">3</span></p>
                    <p>Nombre de chambres : <span className="font-bold">2</span></p><br />

                    <p>Ville : <span className="font-bold">Paris</span></p>
                    <p>Présence d'un parking : <span className="font-bold">Oui</span></p><br /> 
                    
                    <p>Bilan énergétique : <span className="font-bold">C</span></p>
                    <p>Emissions de gaz : <span className="font-bold">D</span></p>
                </div>
            </div>
            <div className="py-10 w-4/12">
                <div className="mb-7 rounded-md bg-blue-50 px-3 py-2 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-0 w-full">
                    {/* Infos */}
                    <h1 className="text-2xl mb-2">Simulation</h1>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 text-xl">
                            Montant investit :
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm mb-2">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option>EUR</option>
                                <option>USD</option>
                                <option>CAD</option>
                            </select>
                            </div>
                        </div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 text-xl">
                            Rendement :
                        </label>
                        <p className="text-lg">Avec un taux de <span className="font-bold">11%</span>, je recevrai <span className="font-bold">XXX€</span></p>
                    </div>

                </div>
                <div className="rounded-md bg-blue-50 px-3 pt-2 pb-4 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-5 w-full">
                    {/* Infos */}
                    <h1 className="text-2xl mb-2">Investissement</h1>
                    <p className="text-lg">Montant d'une part : <span className="font-bold">150€</span></p>
                    <p className="rounded-md bg-blue-50 px-3 py-2 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-2 w-full">Parts restantes : <span className="font-bold">12</span></p>
                    <p className="rounded-md bg-blue-700 px-3 py-2 font-medium text-blue-50 ring-1 ring-inset ring-blue-700/10 mt-2 w-full flex justify-center">INVESTIR</p>
                </div>
            </div>
        </main>
    )
}