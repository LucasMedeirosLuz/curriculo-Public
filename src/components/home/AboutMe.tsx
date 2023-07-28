import Image from "next/image";

const AboutMe = () => {
  return (
    <>
    <main>
      <div>
        <h1>Prazer, sou &nbsp;</h1>
        <span>Lucas</span>
        <h2>
          Sou um desenvolvedor Front-end, e amo estudar programação.
        </h2>
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
          width={ 300 }
          height={ 300 }
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