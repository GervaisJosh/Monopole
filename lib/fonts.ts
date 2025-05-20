import { Playfair_Display, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const hvFlorentino = localFont({
  src: '../public/fonts/HV Florentino Regular.otf',
  variable: '--font-hv-florentino',
  display: 'swap',
});

export const tayBasal = localFont({
  src: '../public/fonts/TayBasal.otf',
  variable: '--font-tay-basal',
  display: 'swap',
});