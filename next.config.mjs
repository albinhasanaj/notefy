/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
        // Solve the problem of the browser not refreshing when the code changes
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    }
};

export default nextConfig;
