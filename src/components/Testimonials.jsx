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
    {
      content: 'Très bien gentille très très aimable',
      author: {
        name: 'Annick Annick',
        role: 'Patiente',
        image: Annick_Annick,
      },
    },
    {
      content:
        'Infirmière au top ! Très professionnel et toujours ponctuel ! Et sympathique ! Merci !',
      author: {
        name: 'Sarah Mimoun',
        role: 'Patiente',
        image: Sarah_Mimoun,
      },
    },
    {
      content:
        "Chrystel s'occupe de moi depuis des années. Elle est géniale. Elle est patiente, et fait très bien son travail.",
      author: {
        name: 'Claude Marion',
        role: 'Patient',
        image: Claude_Marion,
      },
    },
  ],
  [
    {
      content: 'Je valide ce cabinet à 100% ils sont trop organisés trop gentils leurs travail nickel et le dialogue nickel aussi bref je trouve pas un autre cabinet plus qu’eux merci Nicole et Chrystel',
      author: {
        name: 'Atighou Bah',
        role: 'Patient de longue durée',
        image: Atighou_Bah,
      },
    },
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
        "Les infirmières très gentilles, serviables, aimables , ponctuelles , elles sont toujours là quand on a besoin d'elles. Je recommande à tout le monde.",
      author: {
        name: 'Geeta Bee',
        role: 'Patiente',
        image: Geeta_Bee,
      },
    },
    {
      content:
        "Ça fait 3 ans que les infirmières me soignent. Elles sont très gentilles et elles travaillent très bien. Elles me font des injections, des prises de sang. Elles m'apportent tout le soutien dont j'ai besoin avec ma maladie  Je suis très contente.",
      author: {
        name: 'Isabel Mendoca',
        role: 'Patiente',
        image: Isabel_Mendoca,
      },
    },
    {
      content:
        'Je suis suivie pour mon diabète depuis plusieurs années par les infirmières de ce cabinet qui sont bienveillantes, attentionnée et professionnelles.',
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
