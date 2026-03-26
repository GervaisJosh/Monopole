import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Satoshi-Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const tayBasal = localFont({
  src: '../public/fonts/TayBasal.otf',
  variable: '--font-tay-basal',
  display: 'swap',
});
