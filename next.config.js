/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	transpilePackages:['antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker'],
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/auction',
				permanent: true
			}
		]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [{loader: '@svgr/webpack', options: {icon: true}}]
		})

		return config
	}
}

module.exports = nextConfig
