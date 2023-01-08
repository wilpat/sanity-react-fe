import sanityCLient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url/'

export const client = sanityCLient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  token: process.env.REACT_APP_SANITY_TOKEN,
  dataset: process.env.REACT_APP_SANITY_PROJECT_ENVIRONMENT,
  apiVersion: '2023-01-08',
  useCdn: true
})

const builder = imageUrlBuilder(client);

export const urlFor = builder.image