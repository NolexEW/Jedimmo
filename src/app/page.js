"use client"
import NavBar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Image from 'next/image'
import Filter from "@/components/Filter"
import Map from '@/components/MapContainer'
import ListGrid from '@/components/ListGrid'
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
      <NavBar
          searchBar={true}
      />
    <main className="flex min-h-screen flex-col ">
      <div className="flex min-h-screen flex-col mx-32">
        <Filter />
        <div className='flex justify-between m-8 relative'>
          <ListGrid />
          <iframe
              height={500}
              width={500}
              src='https://hbernberg.carto.com/builder/6650a85d-b115-4680-ab97-721bf8a41a90/'/>
        </div>
        </div>
      <Logo />
    </main>
        <Footer />
      </>
  )
}
