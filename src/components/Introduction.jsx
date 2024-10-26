import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Le Cabinet Infirmier Civiale : Des soins infirmiers de proximité à
          domicile et au cabinet.
        </p>
        <p className="mt-4">
          Depuis plus de 30 ans, notre cabinet situé au cœur de Belleville,
          Paris, offre des soins infirmiers de qualité pour répondre aux besoins
          de santé de chaque patient avec compassion et professionnalisme.
        </p>
        <p className="mt-4">
          Nos infirmiers expérimentés sont dédiés à fournir une prise en charge
          attentive, que ce soit au domicile des patients ou au cabinet.
        </p>
        <p className="mt-4">
          Nous combinons expertise médicale et écoute active pour garantir le
          bien-être et la satisfaction de notre communauté.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Soins infirmiers à domicile pour un accompagnement personnalisé',
            'Consultations sur rendez-vous au cabinet pour des soins adaptés',
            'Suivi des traitements et gestion de la médication',
            'Évaluation des besoins de santé de chaque patient',
            'Conseils et éducation pour la prévention et le bien-être',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Grâce à notre engagement envers la santé de la communauté, vous
          bénéficierez d'une prise en charge de qualité et de proximité, adaptée
          à chaque besoin.
        </p>
        <p className="mt-10">
          <Link
            href="#contact"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Contactez-nous pour plus d’informations sur nos services{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
