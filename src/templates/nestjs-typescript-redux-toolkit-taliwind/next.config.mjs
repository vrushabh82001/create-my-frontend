/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * Define the rewrites for the Next.js application.
     *
     * @return {Array} An array of rewrite objects.
     */
    async rewrites() {
        return [
            /**
             * Rewrite the API routes to the backend.
             * The source matches all paths that start with "/api/".
             * The destination is the backend URL with the same path.
             */
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_PROXY}/:path*`, // Proxy to Backend
            },
        ]
    }
};

export default nextConfig;
