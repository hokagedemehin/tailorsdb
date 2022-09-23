/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'cloudflare-ipfs.com',
      'upload.wikimedia.org',
      'avatars.dicebear.com',
      'doodleipsum.com',
      'loremflickr.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
