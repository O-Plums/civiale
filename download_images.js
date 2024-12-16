const fs = require('fs')

const testimonials = [
  [
    {
      content:
        'Le Cabinet Infirmier Civiale est un véritable atout pour notre quartier. Leur équipe est attentionnée et professionnelle.',
      author: {
        name: 'Annick Annick',
        role: 'Patiente',
        image:
          'https://lh3.googleusercontent.com/a/ACg8ocJUa4rnL1zgR9QHzbQlMc08lxQ18gd16XK_lg0_t5TzJdxl=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'Je suis tellement reconnaissante des soins à domicile fournis par l’équipe. Leur gentillesse et professionnalisme sont exemplaires.',
      author: {
        name: 'Sarah Mimoun',
        role: 'Résidente',
        image:
          'https://lh3.googleusercontent.com/a-/ALV-UjUCU2oNj8I8ufTvDBPSEbyFhFc1hF2ZPwblHvBOhYVPvE6z3Rs=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'Grâce à leurs soins, ma convalescence a été beaucoup plus facile. Je recommande sans hésitation.',
      author: {
        name: 'Claude Marion',
        role: 'Patient',
        image:
          'https://lh3.googleusercontent.com/a/ACg8ocLE-h4FRz0T3VRa7JsjFTSYwKskcAe8ziD_9C9RWkEtssYHLw=s120-c-rp-mo-br100',
      },
    },
  ],
  [
    {
      content:
        'Je n’ai jamais connu un service aussi humain et attentif. Le Cabinet Infirmier Civiale s’occupe de nous comme une famille.',
      author: {
        name: 'Atighou Bah',
        role: 'Patient de longue durée',
        image:
          'https://lh3.googleusercontent.com/a-/ALV-UjWGzpcn1nIx6IdVphmBaUImEgR5qGxq21Hf3OKp0RHnlBExhH4s=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'L’équipe m’a accompagné après mon opération avec un suivi personnalisé et une attention incroyable.',
      author: {
        name: 'Wilfried Tchinda',
        role: 'Patient en convalescence',
        image:
          'https://lh3.googleusercontent.com/a-/ALV-UjUW16RyHY_dJ8iHPZFafS9v-gYYd27TOlGF0WhDQB8XgUGiVhc=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'Leurs soins à domicile ont fait toute la différence pour ma mère. Je suis impressionnée par leur dévouement.',
      author: {
        name: 'Dominique Msirdi',
        role: 'Fille d’une patiente',
        image:
          'https://lh3.googleusercontent.com/a-/ALV-UjUnrkY9Vs1C4lJ5TJqIREcpatV2lmwHZBdI2ObVTXMPXP-FUpQ=s120-c-rp-mo-br100',
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
        image:
          'https://lh3.googleusercontent.com/a/ACg8ocKhLbuR8PWQ_294fuK1K2uhe8sWWiWLqV92ngVvm2Jc_-vksw=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'Je recommande vivement leurs services à toute personne ayant besoin de soins infirmiers personnalisés et attentionnés.',
      author: {
        name: 'Isabel Mendoca',
        role: 'Résidente',
        image:
          'https://lh3.googleusercontent.com/a/ACg8ocIXB-DYtqFPHu-xAHko0KGIGU4yEjIJkLrWGARuUw4B-9xXVw=s120-c-rp-mo-br100',
      },
    },
    {
      content:
        'Une équipe de confiance et des soins de qualité. Ils sont toujours disponibles et professionnels.',
      author: {
        name: 'Jeanne Hélène Ngo Mintamack',
        role: 'Patiente régulière',
        image:
          'https://lh3.googleusercontent.com/a/ACg8ocJkAFCKYjLptXOhRl4NrZw_8LYwnDE06qVXK4GJ1UVYTZoijA=s120-c-rp-mo-br100',
      },
    },
  ],
]

;(async () => {
  // Flatten the array to get all testimonials in one array
  const allTestimonials = testimonials.flat()

  for (let i = 0; i < allTestimonials.length; i++) {
    const { image, name } = allTestimonials[i].author
    // Extract a file name from the URL (for simplicity, we’ll use the author’s name with underscores)
    const fileName = name.replace(/\s+/g, '_') + '.jpg'

    console.log(`Downloading: ${fileName} from ${image}`)

    const response = await fetch(image)
    if (!response.ok) {
      console.error(`Failed to download ${image}: ${response.statusText}`)
      continue
    }

    const buffer = await response.buffer()
    fs.writeFileSync(`./images/${fileName}`, buffer)
  }

  console.log('All images downloaded!')
})()
