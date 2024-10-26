import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Introduction aux soins': {
    'Présentation des services': 1,
    'Première consultation': 5,
    'Guide des soins à domicile': 12,
  },
  'Soins infirmiers': {
    'Soins de plaies': 15,
    'Gestion des traitements': 18,
    'Suivi et prévention': 25,
    Vaccinations: 30,
    Injections: 35,
  },
  'Services spécialisés': {
    'Prise en charge des patients âgés': 40,
    'Accompagnement post-opératoire': 45,
    'Soins palliatifs': 52,
    'Éducation thérapeutique': 60,
  },
  'Informations pratiques': {
    'Conseils pour les soins à domicile': 65,
    'Préparation avant une visite': 70,
    Téléconsultation: 75,
    'Contact et urgences': 80,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Services et informations
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Découvrez l’ensemble des services et informations que nous offrons.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Le Cabinet Infirmier Civiale vous propose une gamme complète de soins
          infirmiers et de services spécialisés pour répondre aux besoins de
          santé de chaque patient.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} sur la page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>Voir plus</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
