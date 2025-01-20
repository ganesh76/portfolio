/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize images
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
    // Optimize image loading
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },

  // Enable compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
    // Remove react-dev-tools in production
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? { properties: ["^data-test"] }
        : false,
  },

  // Enable experimental features for better performance
  experimental: {
    // Enable optimizing third-party scripts
    optimizePackageImports: ["framer-motion", "lucide-react"],
    // Optimize CSS
    optimizeCss: true,
    // Enable scroll restoration
    scrollRestoration: true,
  },

  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize production builds
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Enable page caching for better performance
  generateEtags: true,

  // Compress responses
  compress: true,

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */

  // comment for local dev mode
  //basePath: "",

  // for github pages add repo name
  basePath: process.env.NEXT_PUBLIC_DEPLOY_MODE === "local" ? "" : "/portfolio",

  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder:
      process.env.NEXT_PUBLIC_DEPLOY_MODE === "local" ? "" : "/portfolio",
  },

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  // images: {
  //   unoptimized: true,
  // },

  // Disable powered by header
  poweredByHeader: false,
};

module.exports = nextConfig;
