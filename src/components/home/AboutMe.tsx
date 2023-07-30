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
      md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between"
    >
      <div className="text-l-blue-1 flex flex-col item-center xl:item-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rme]"
        >Prazer, sou&nbsp;
        <span className="font-bold"
        >Lucas</span>
        </h1>
        <div className="mb-12">
        <h2 className={`${josefin_sans} mb-12`}>
          Sou um desenvolvedor Front-end, e amo estudar programação.
        </h2>
        </div>
      <ul>
        <li style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}>TypeScript</li>
        <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>JavaScript</li>
        <li style={{ backgroundColor: '#000000', color: '#FFFFFF'  }}>Next.js</li>
      </ul>
      </div>
      <div>
        <Image
          src="/fotoPerfil.jpg"
          alt="Foto de perfil Lucas. Homem branco de oculos e baraba"
          width={ 500 }
          height={ 500 }
          unoptimized
        />
        <p>
          <span>0</span>
          <br />
          Anos de experiência.
        </p>
      </div>
    </main>
    </>
  )
};

export default AboutMe;