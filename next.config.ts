import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 5,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swappable-img-bucket.s3.eu-west-2.amazonaws.com",
        //pathname: "/**",
        

      },
    ],
  },
};

export default nextConfig;
