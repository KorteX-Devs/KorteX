import localFont from "next/font/local";

export const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/Satoshi/Satoshi-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Variable.woff2",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-VariableItalic.woff2",
			style: "italic",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

