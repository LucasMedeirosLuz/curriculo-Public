import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Ola Mundo</h1>
      <Link 
        href="/loginPage"
        className="Link"
      >
        Login Page
      </Link>
    </main>
  )
}

export default Home;
