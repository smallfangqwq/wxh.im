/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["testingcf.jsdelivr.net", "thirdqq.qlogo.cn"],
    ...(process.env.CF_PAGES
      ? { loader: "custom", loaderFile: "./image-loader.ts" }
      : {}),
  },
};

module.exports = nextConfig;
