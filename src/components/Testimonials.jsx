import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Le Cabinet Infirmier Civiale est un véritable atout pour notre quartier. Leur équipe est attentionnée et professionnelle.',
      author: {
        name: 'Julien Martin',
        role: 'Patient de longue date',
        image: avatarImage3,
      },
    },
    {
      content:
        'Je suis tellement reconnaissante des soins à domicile fournis par l’équipe. Leur gentillesse et professionnalisme sont exemplaires.',
      author: {
        name: 'Sophie Leclerc',
        role: 'Résidente de Belleville',
        image: avatarImage4,
      },
    },
    {
      content:
        'Grâce à leurs soins, ma convalescence a été beaucoup plus facile. Je recommande sans hésitation.',
      author: {
        name: 'Claire Dupont',
        role: 'Patiente',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Je n’ai jamais connu un service aussi humain et attentif. Le Cabinet Infirmier Civiale s’occupe de nous comme une famille.',
      author: {
        name: 'Antoine Moreau',
        role: 'Patient de longue durée',
        image: avatarImage7,
      },
    },
    {
      content:
        'L’équipe m’a accompagné après mon opération avec un suivi personnalisé et une attention incroyable.',
      author: {
        name: 'Marie Laurent',
        role: 'Patiente en convalescence',
        image: avatarImage11,
      },
    },
    {
      content:
        'Leurs soins à domicile ont fait toute la différence pour ma mère. Je suis impressionnée par leur dévouement.',
      author: {
        name: 'Isabelle Dupuis',
        role: 'Fille d’une patiente',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Je n’ai jamais eu autant de soutien dans mon parcours de santé. Leur équipe est formidable!',
      author: {
        name: 'Lucas Perrot',
        role: 'Patient',
        image: avatarImage5,
      },
    },
    {
      content:
        'Je recommande vivement leurs services à toute personne ayant besoin de soins infirmiers personnalisés et attentionnés.',
      author: {
        name: 'Emma Fontaine',
        role: 'Résidente de Paris',
        image: avatarImage10,
      },
    },
    {
      content:
        'Une équipe de confiance et des soins de qualité. Ils sont toujours disponibles et professionnels.',
      author: {
        name: 'Alice Marchand',
        role: 'Patiente régulière',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Témoignages de nos patients
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Nous sommes honorés de partager les retours de nos patients sur les
          soins qu’ils ont reçus et l’accompagnement que nous leur offrons.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Voir plus de témoignages</ExpandableButton>
      </Expandable>
    </section>
  )
}
