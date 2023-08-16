import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '500',
});

const AboutMe = () => {
  return (
    <>
    <main className="flex flex-wrap-reverse justify-center item-center gap-10
      md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between"
    >
      <div className="text-l-blue-1 flex flex-col item-center xl:item-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rme]"
        >Prazer, sou&nbsp;
        <strong className="font-bold">Lucas</strong>
        </h1>
        <div className="mb-12">
        <h2 className={`${josefin_sans} mb-12`}>
          Sou um desenvolvedor Front-end, e gosto de estudar e aprender novas tecnologias, estou atualmente estudando back-end || MySQL || PHP.
        </h2>
        </div>
      <ul className="flex flex-wrap justify-center xl:grid-cols-2 xl:w-fit gap-3 text-xl">
        <li 
          style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}
          className="w-fit p-2 rounded-md"
        >TypeScript</li>
        <li 
          style={{ backgroundColor: '#EFD81D', color: '#000000' }}
          className="w-fit p-2 rounded-md"
        >JavaScript</li>
        <li 
          style={{ backgroundColor: '#000000', color: '#FFFFFF'  }}
          className="w-fit p-2 rounded-md"
        >Next.js</li>
      </ul>
      </div>
      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/97979790?v=4"
          alt="Foto de perfil Lucas. Homem branco de oculos e baraba"
          width={300}
          height={300}
          unoptimized
          className="rounded-full md:w-[500px] md:h-[500px]"
        />
        <p className="p-4 w-fit text-base md:text-2xl leading-tight bg-l-blue-2 rounded-xl text-black absolute -bottom-[0.75rem] md:w-[250px] md:h-[150px]">
          <strong className="text-3xl md:text-5xl">0</strong>
          <br />
          Anos de experiência.
        </p>
      </div>
    </main>
    </>
  )
};

export default AboutMe;