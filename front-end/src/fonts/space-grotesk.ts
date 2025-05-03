import localFont from "next/font/local";

export const spaceGrotesk = localFont({
	src: [
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Light.woff",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Bold.woff",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Variable.woff",
			style: "normal",
		},
	],
	variable: "--font-spaceGrotesk",
	display: "swap",
});

