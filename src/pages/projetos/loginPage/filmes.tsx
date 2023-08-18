import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const VITE_API_KEY="?api_key=31aeee10e6cb45019b5ef4c9227d8b4a";
const moviesURL="https://api.themoviedb.org/3/movie/";
const VITE_SEARCH="https://api.themoviedb.org/3/search/movie/";
const VITE_IMG="https://image.tmdb.org/t/p/w500/";

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/changes?page=2';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWFlZWUxMGU2Y2I0NTAxOWI1ZWY0YzkyMjdkOGI0YSIsInN1YiI6IjY0ZGMyYjBlZjQ5NWVlMDI4ZjY2NDU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pXdjVF6JcSTjTCZSpFfeHQsqqzC14gnlFE9Sy6LuCQI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

console.log(fetch(url, options));
  

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