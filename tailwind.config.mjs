/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes:{
				gradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "100% 50%" }
				}
			},
			animation: {
				gradient: "gradient 6s linear infinite"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
