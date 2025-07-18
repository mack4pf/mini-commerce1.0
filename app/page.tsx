// app/page.tsx

export const metadata = {
  title: 'Mini-Commerce | Home',
  description: 'Shop quality products with Mini-Commerce.',
  openGraph: {
    title: 'Mini-Commerce | Home',
    description: 'Shop quality products with Mini-Commerce.',
    url: 'http://localhost:3000/',
    siteName: 'Mini-Commerce',
    images: [
      {
        url: 'http://localhost:3000/https://picsum.photos/id/101/200/200',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import HomeClient from './home-client'

export default function HomePage() {
  return <HomeClient />
}
