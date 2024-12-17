import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title:
    'Cabinet Infirmier - A domicile et au cabinet à Belleville, Paris',
  description:
    'Le Cabinet Infirmier Civiale, à Belleville, Paris, offre des soins infirmiers personnalisés à domicile et sur rendez-vous au cabinet.',
}


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Cabinet Infirmier Civiale',
  url: 'https://infirmier-belleville.fr',
  logo: '/favicon.ico',
  telephone: '+33664206570',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 rue civiale, Belleville ',
    addressLocality: 'Paris',
    postalCode: '75010',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  description:
    'Des soins infirmiers attentifs à domicile et au cabinet, assurant le bien-être de nos patients à Belleville, Paris.',
  image: '/images/cover.png',
  priceRange: '$$',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://infirmier-belleville.fr/reservation',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
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
          content="Cabinet Infirmier Belleville - Soins infirmiers de qualité à Paris"
        />
        <meta
          property="og:description"
          content="Découvrez notre cabinet à Belleville, Paris, offrant des soins infirmiers personnalisés pour chaque besoin de santé."
        />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:url" content="https://infirmier-belleville.fr" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cabinet Infirmier Belleville - Votre santé, notre priorité"
        />
        <meta
          name="twitter:description"
          content="Des soins infirmiers attentifs à domicile et au cabinet. Situé à Belleville, Paris."
        />
        <meta name="twitter:image" content="/images/cover.png" />
        <meta
          name="google-site-verification"
          content="SzXMK5qViY9lF2_LqZMi7qxl0onwJ2gk5Q9VnR5D7Fs"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
