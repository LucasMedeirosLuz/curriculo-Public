import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '500',
});

export const Footer = () => {
  return(
    <p
      className={`${josefin_sans} flex justify-center content-center bg-l-blue-5 p-4 bottom-0`}
    >
      Lucas De Medeiros Luz &copy; 2023</p>
  )
};
