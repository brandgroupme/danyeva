import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/danyeva" : "",
  assetPrefix: isGitHubPages ? "/danyeva/" : undefined,
};

export default nextConfig;
