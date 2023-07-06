"use client"
import {ChevronUpIcon, PaperClipIcon} from '@heroicons/react/20/solid'
import Question from "@/app/components/ui/Question";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

export default function Example() {
  return (
      <main className="bg-white">
      <Navbar/>
      <section className="flex items-center flex-col my-16">
        <h1 className="text-5xl font-bold">FAQ</h1>
            <h2 className="inline-flex rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mt-5">Investissement</h2>    
            <Question
                title="Comment investir sur Jed-immo ?"
                content="Pour investir sur Jed-immo, il vous suffit de vous inscrire sur notre plateforme et de choisir le bien qui vous convient. Vous pouvez ensuite nous contacter pour plus d'informations."
            />
            <Question
                title="De quels documents ai-je besoin pour investir ?"
                content="Pour commencer à investir, vous devez fournir une pièce d'identité et un justificatif de domicile."
            />
            <h2 className="inline-flex rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mt-5">Vente</h2>
            <Question
                title="Lorem Impsum  ?"
                content="Pour créditer votre solde, il vous suffit de vous rendre sur votre profil et de cliquer sur le bouton créditer. Vous pouvez ensuite choisir le montant que vous souhaitez créditer."
            />
            <Question
                title="Lorem Impsum  ?"
                content="Pour retirer votre solde, il vous suffit de vous rendre sur votre profil et de cliquer sur le bouton retirer. Vous pouvez ensuite choisir le montant que vous souhaitez retirer."
            />
            <h2 className="inline-flex rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mt-5">Gestion du solde</h2>
            <Question
                title="Comment créditer son solde ?"
                content="Pour créditer votre solde, il vous suffit de vous rendre sur votre profil et de cliquer sur le bouton créditer. Vous pouvez ensuite choisir le montant que vous souhaitez créditer."
            />
            <Question
                title="Comment retirer son solde ?"
                content="Pour retirer votre solde, il vous suffit de vous rendre sur votre profil et de cliquer sur le bouton retirer. Vous pouvez ensuite choisir le montant que vous souhaitez retirer."
            />
            
      </section>
      <Footer/>
      </main>
    )
}