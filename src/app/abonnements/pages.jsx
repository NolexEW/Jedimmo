"use client"
import NavBar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'
import Pricing from '@/app/components/ui/Pricing'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar searchBar="true"/>
      <Pricing />
      <Footer/>
    </main>
  )
}