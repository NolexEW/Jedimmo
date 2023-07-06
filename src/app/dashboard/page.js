import Image from 'next/image'

import StatsContainer from '@/components/StatsContainer'
import Card from '@/components/Card'
import Button from '@/components/Button'
import ListGrid from '@/components/ListGrid'

export default function Dashboard() {
    return (
        <main className="flex min-h-screen justify-center gap-16">
            <div className='flex flex-col my-16 w-80 gap-6'>
                <Card>
                    <div className="flex flex-col items-center w-full">
                        <img
                            className="inline-block h-32 w-32 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div className='flex flex-col gap-2 my-6'>
                            <span>Paul</span>
                            <span>Inscrit depuis 01/01/2023</span>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <Button>
                                Mes documents
                            </Button>
                            <Button>
                                Modifier mes informations
                            </Button>

                        </div>
                </div>
                </Card>
                <Card>
                    <div className="flex flex-col items-center w-full gap-4">
                        <span className='text-2x'>Fidélité</span>
                        <span className='inline-flex items-center rounded-md bg-green-50  px-2 py-1 text-2xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                            Niveau Padawan
                        </span>
                        <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>Prochain palier à : 270 000 <img className="ml-1 w-3 h-5" src="Republic_credit_symbol.svg"/></span>
                    </div>
                </Card>
            </div>
            <div className="flex flex-col">
                <StatsContainer />
                <ListGrid title="Mes investissements" />
            </div>
        </main>
    )
}