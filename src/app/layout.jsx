import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title:
    'Cabinet Infirmier Civiale - Infirmière à domicile et au cabinet à Belleville, Paris',
  description:
    'Le Cabinet Infirmier Civiale, une institution à Belleville, Paris, offre des soins infirmiers personnalisés à domicile et sur rendez-vous au cabinet pour assurer le bien-être de chaque patient.',
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
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
