import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const VITE_API_KEY="api_key=8ed200f50a6942ca5bc8b5cdec27ff22";
const moviesURL="https://api.themoviedb.org/3/movie/";
const VITE_SEARCH="https://api.themoviedb.org/3/search/movie/";
const VITE_IMG="https://image.tmdb.org/t/p/w500/";

console.log(moviesURL);

export async function movies() {

  const res = await fetch(`${moviesURL}${VITE_API_KEY}`)
  const data = await res.json()
  console.log(data);
  return data;
}

movies();


const filmePage = () => {
  return (
    <div className="test">
    <Head>
      <title>Filmes | LucasMLuz</title>
    </Head>
    <main>
      <h1>Filmes</h1>
      <Link className="Link" href="/projetos/loginPage">voltar</Link>
    </main>
    </div>
  )
}

export default filmePage;