const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  // distDir: 'build',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  // images: {
  //   // domains: ['i3.ytimg.com', 'img.youtube.com'],
  //   // formats: ['image/webp'],
  //   loader: "akamai",
  //   path: '/_next/image',    // unoptimized: true
  // },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ];
  },
  productionBrowserSourceMaps: true,
});
