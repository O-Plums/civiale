import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'


// At the top of your file:
import Annick_Annick from '@/images/avatars/Annick_Annick.jpg'
import Sarah_Mimoun from '@/images/avatars/Sarah_Mimoun.jpg'
import Claude_Marion from '@/images/avatars/Claude_Marion.jpg'

import Atighou_Bah from '@/images/avatars/Atighou_Bah.jpg'
import Wilfried_Tchinda from '@/images/avatars/Wilfried_Tchinda.jpg'
import Dominique_Msirdi from '@/images/avatars/Dominique_Msirdi.jpg'

import Geeta_Bee from '@/images/avatars/Geeta_Bee.jpg'
import Isabel_Mendoca from '@/images/avatars/Isabel_Mendoca.jpg'
import Jeanne_Hélène_Ngo_Mintamack from '@/images/avatars/Jeanne_Hélène_Ngo_Mintamack.jpg'

// Now update your testimonials array to use these imported images:

const testimonials = [
  [
    // {
    //   content:
    //     'Le Cabinet Infirmier Civiale est un véritable atout pour notre quartier. Leur équipe est attentionnée et professionnelle.',
    //   author: {
    //     name: 'Annick Annick',
    //     role: 'Patiente',
    //     image: Annick_Annick,
    //   },
    // },
    {
      content:
        'Je suis tellement reconnaissante des soins à domicile fournis par l’équipe. Leur gentillesse et professionnalisme sont exemplaires.',
      author: {
        name: 'Sarah Mimoun',
        role: 'Patiente',
        image: Sarah_Mimoun,
      },
    },
    {
      content:
        'Grâce à leurs soins, ma convalescence a été beaucoup plus facile. Je recommande sans hésitation.',
      author: {
        name: 'Claude Marion',
        role: 'Patient',
        image: Claude_Marion,
      },
    },
  ],
  [
    // {
    //   content:
    //     'Je n’ai jamais connu un service aussi humain et attentif. Le Cabinet Infirmier Civiale s’occupe de nous comme une famille.',
    //   author: {
    //     name: 'Atighou Bah',
    //     role: 'Patient de longue durée',
    //     image: Atighou_Bah,
    //   },
    // },
    {
      content:
        'L’équipe m’a accompagné après mon opération avec un suivi personnalisé et une attention incroyable.',
      author: {
        name: 'Wilfried Tchinda',
        role: 'Patient en convalescence',
        image: Wilfried_Tchinda,
      },
    },
    {
      content:
        'Leurs soins à domicile ont fait toute la différence pour ma mère. Je suis impressionnée par leur dévouement.',
      author: {
        name: 'Dominique Msirdi',
        role: 'Fille d’une patiente',
        image: Dominique_Msirdi,
      },
    },
  ],
  [
    {
      content:
        'Je n’ai jamais eu autant de soutien dans mon parcours de santé. Leur équipe est formidable!',
      author: {
        name: 'Geeta Bee',
        role: 'Patiente',
        image: Geeta_Bee,
      },
    },
    {
      content:
        'Je recommande vivement leurs services à toute personne ayant besoin de soins infirmiers personnalisés et attentionnés.',
      author: {
        name: 'Isabel Mendoca',
        role: 'Patiente',
        image: Isabel_Mendoca,
      },
    },
    {
      content:
        'Une équipe de confiance et des soins de qualité. Ils sont toujours disponibles et professionnels.',
      author: {
        name: 'Jeanne Hélène Ngo Mintamack',
        role: 'Patiente régulière',
        image: Jeanne_Hélène_Ngo_Mintamack,
      },
    },
  ],
]

export default testimonials


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
            alt={author.name}
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
      </Expandable>
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <a
          href="https://search.google.com/local/reviews?placeid=ChIJF3zNhUxt5kcRudBY-7p39sI&q=*&authuser=0&hl=en&gl=US"
         target='_blank'
          className="text-lg font-medium text-blue-600 underline hover:text-blue-800"
        >
          Lire plus de témoignages
        </a>
      </div>
    </section>
  )
}
