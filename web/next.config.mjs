import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // On Cloudflare Workers, /_next/image is served through Cloudflare Image
    // Transformations, which are not available on *.workers.dev and must be
    // enabled per-zone. Serving images unoptimized keeps them working on the
    // first deploy; flip this off once Transformations are on for the domain.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Higgsfield-generated assets are served from this CDN.
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/civil-surgeon-uscis-exams',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/locations/schenectady',
        destination: '/locations/benin-city',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

export default nextConfig;

// Makes Cloudflare bindings available to `next dev`. No-op in production builds.
initOpenNextCloudflareForDev();
