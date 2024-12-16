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
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import Head from 'next/head'



const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Cabinet Infirmier Civiale',
  url: 'https://yourwebsite.com',
  logo: '/path-to-logo.png',
  telephone: '+33664206570',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '25 rue de Belleville',
    addressLocality: 'Paris',
    postalCode: '75020',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8728737,
    longitude: 2.3753148,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  description:
    'Des soins infirmiers attentifs à domicile et au cabinet, assurant le bien-être de nos patients à Belleville, Paris.',
  image: '/path-to-your-image.jpg',
  priceRange: '$$',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://yourwebsite.com/reservation',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cabinet Infirmier Civiale - Soins infirmiers à domicile et au cabinet
          à Belleville, Paris
        </title>
        <meta
          name="description"
          content="Le Cabinet Infirmier Civiale propose des soins infirmiers professionnels et attentionnés, disponibles à domicile ou sur rendez-vous. Contactez-nous pour en savoir plus sur nos services."
        />
        <meta
          name="keywords"
          content="Cabinet Infirmier Civiale, soins infirmiers, soins à domicile, Paris, Belleville, santé, bien-être"
        />
        <meta name="author" content="Cabinet Infirmier Civiale" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cabinet Infirmier Civiale - Soins infirmiers de qualité à Paris"
        />
        <meta
          property="og:description"
          content="Découvrez notre cabinet à Belleville, Paris, offrant des soins infirmiers personnalisés pour chaque besoin de santé."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cabinet Infirmier Civiale - Votre santé, notre priorité"
        />
        <meta
          name="twitter:description"
          content="Des soins infirmiers attentifs à domicile et au cabinet. Situé à Belleville, Paris."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-patient-marie-dubois"
        author={{
          name: 'Marie Dubois',
          role: 'Patient de Belleville',
          image: avatarImage1,
        }}
      >
        <p>
          “Le Cabinet Infirmier Civiale a transformé ma façon de recevoir des
          soins. Leur équipe est attentionnée et compétente. Je recommande
          fortement leurs services à toute la communauté.”
        </p>
      </Testimonial>
      {/*<Screencasts /> */}
      <Testimonial
        id="testimonial-from-patient-jean-martin"
        author={{
          name: 'Jean Martin',
          role: 'Patient de longue date',
          image: avatarImage2,
        }}
      >
        <p>
          “Les soins à domicile m'ont permis de rester chez moi tout en recevant
          l'attention médicale dont j'avais besoin. Le personnel est
          bienveillant et professionnel.”
        </p>
      </Testimonial>
      {/*<Resources />
      <FreeChapters /> */}
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
