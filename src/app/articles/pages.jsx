"use client"
import NavBar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'
import Articles from '@/app/components/ui/Articles'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar searchBar="true"/>
      <Articles />
      <Footer/>
    </main>
  )
}