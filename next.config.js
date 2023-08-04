/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.traction.one',
      //   port: '',
      //   pathname: '/pokedex/**',
      // },
    ],
  },
}

module.exports = nextConfig
