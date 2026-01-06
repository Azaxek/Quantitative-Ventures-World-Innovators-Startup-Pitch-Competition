
import { Winner } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: '2025 Winners', href: '/winners' },
  { label: 'Register', href: '/register' },
  { label: 'Contact', href: '/contact' },
];

export const WINNERS_DATA: Winner[] = [
  {
    year: '2025–2026',
    competitorCount: '600+',
    firstPlace: { name: 'Aryav Agrawal', funding: '$5,000' },
    secondPlace: { name: 'Ishan Jha', funding: '$2,000' },
    thirdPlace: { name: 'Navya Singh', funding: '$500' },
  },
];