/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local placeholder art is generated as SVG (see scripts/generate-placeholders.mjs).
    // Swap real photography in as JPG/PNG/WebP and this flag can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
