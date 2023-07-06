"use client"
import NavBar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'
import Details from '@/app/components/ui/Details'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar searchBar="true"/>
      <Details />
      <Footer/>
    </main>
  )
}