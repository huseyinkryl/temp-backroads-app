import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const footerLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#featured', text: 'featured' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    img: tour1,
    tourDate: 'august 26th, 2023',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    tripDay: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    tourDate: 'october 1th, 2024',
    title: 'Best of Java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Indonesia',
    tripDay: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    tourDate: 'september 15th, 2023',
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    tripDay: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    tourDate: 'december 5th, 2024',
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    tripDay: '20 days',
    price: 'from $3300',
  },
  {
    id: 5,
    img: tour5,
    tourDate: 'may 26th, 2023',
    title: 'istanbul Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Türkiye',
    tripDay: '7 days',
    price: 'from $1100',
  },
  {
    id: 6,
    img: tour6,
    tourDate: 'august 26th, 2023',
    title: 'Uğrak Yaylası',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Türkiye',
    tripDay: '4 days',
    price: 'from $800',
  },
]
