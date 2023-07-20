/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'claro-bucket01.s3.sa-east-1.amazonaws.com'
        ]
    }
}

module.exports = nextConfig
