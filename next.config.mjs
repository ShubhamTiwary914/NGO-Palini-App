/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com', 'picsum.photos'],
    },
    env: {
        FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
        FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
        FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
        FIREBASE_APPID: process.env.FIREBASE_APPID,
        FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID
    }
};

export default nextConfig;
