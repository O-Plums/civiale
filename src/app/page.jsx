import { Author } from '@/components/Author' // This represents the lead nurse or primary healthcare provider
import { Footer } from '@/components/Footer'
// import { FreeChapters } from '@/components/FreeChapters' // This can be adapted to offer a free consultation or a downloadable brochure
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
// import { Resources } from '@/components/Resources' // Could include links to healthcare resources
// import { Screencasts } from '@/components/Screencasts' // Adapted to showcase healthcare procedure videos or educational content
import { TableOfContents } from '@/components/TableOfContents' // Can represent service categories
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Hero />
      <Introduction />
      {/*
       <NavBar />
       <TableOfContents />
      <Testimonial
        id="testimonial-from-patient-marie-dubois"
        author={{
          name: 'Geeta Bee',
          role: 'Patient',
          image: avatarImage1,
        }}
      >
        <p>
          “Les infirmières très gentilles, serviables, aimables , ponctuelles ,
          elles sont toujours là quand on a besoin d'elles. Je recommande à tout
          le monde.”
        </p>
      </Testimonial>
      <Testimonial
        id="testimonial-from-patient-jean-martin"
        author={{
          name: 'Jeanne Hélène Ngo Mintamack',
          role: 'Patient',
          image: avatarImage2,
        }}
      >
        <p>
          “Je suis suivie pour mon diabète depuis plusieurs années par les
          infirmières de ce cabinet qui sont bienveillantes, attentionnée et
          professionnelles.”
        </p>
      </Testimonial>
     */}

      {/*<Resources />
      <FreeChapters /> 
      <Pricing /> 
      <SimpleMap />
      */}

      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
