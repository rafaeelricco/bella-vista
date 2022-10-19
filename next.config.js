/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  images: {
    domains: ['media.graphassets.com']
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR'
  }
}

module.exports = nextConfig
