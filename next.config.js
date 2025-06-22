const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
        disableDevLogs: true,
    },
});

const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: "https",
            //     hostname: "www.sellmycartoday.uk",
            //     pathname: "/smc/wp-content/uploads/**",
            // },
        ],
    },
};

module.exports = withPWA(nextConfig);
