import localFont from 'next/font/local'

export const opensans = localFont({
  src: [
    {
      path: '../public/fonts/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-opensans',
})

export const inriaserif = localFont({
  src: [
    {
      path: '../public/fonts/InriaSerif-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/InriaSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InriaSerif-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inriaserif',
})

export const bebas = localFont({
  src: [
    {
      path: '../public/fonts/BebasNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-bebasneue',
})