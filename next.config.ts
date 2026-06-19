import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pnpm-workspace üst dizinde olduğundan Next kökü yanlış algılayabiliyor;
  // bu projenin kökünü açıkça belirtiyoruz.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
