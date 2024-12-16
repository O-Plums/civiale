import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>
          Copyright &copy; {new Date().getFullYear()} Le Cabinet Infirmier
          Civiale
        </p>
        <p>Tous droits réservés.</p>
        <a
          className="text-blue-600 hover:underline"
          target='_blank'
          href="https://www.google.fr/maps/place/Cabinet+Infirmier+Civiale/@48.8728737,2.3753148,17z/data=!4m6!3m5!1s0x47e66d4c85cd7c17:0xc2f677bafb58d0b9!8m2!3d48.8728737!4d2.3753148!16s%2Fg%2F11y83lwr41?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        >
          25 rue de Belleville, 75020 Paris
        </a>
        <p>
          Contactez-nous au :{' '}
          <a href="tel:0664206570"
          target='_blank'
          className="text-blue-600 hover:underline">
            06 64 20 65 70
          </a>
        </p>
      </div>
    </footer>
  )
}
