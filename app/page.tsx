"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LandingPage from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import { StarsCanvas } from "@/components/canvas";

 
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-primary ">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About/> 
      <Works/> 
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  )
}
