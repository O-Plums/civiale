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
        <p>25 rue de Belleville, 75020 Paris</p>
        <p>
          Contactez-nous au :{' '}
          <a href="tel:0664206570" className="text-blue-600 hover:underline">
            06 64 20 65 70
          </a>
        </p>
      </div>
    </footer>
  )
}
