"use client"
import NavBar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'
import Niveaux from '@/app/components/ui/Niveaux'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar searchBar="true"/>
      <Niveaux />
      <Footer/>
    </main>
  )
}