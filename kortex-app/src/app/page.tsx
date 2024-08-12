import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroSection } from "./sections/hero-section";
import { FaRegCircleCheck } from "react-icons/fa6";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
	const testimonials = [
		{
			quote:
				"We’d love to stay connected with you. If the feeling’s mutual,follow @raycastapp on Twitter for the latest news and updates.",
			name: "Chingi-Lingi",
			title: "A Tale of Two Cities",
			picture: "/FacePicture.png",
		},
		{
			quote:
				"We’d love to stay connected with you. If the feeling’s mutual,follow @raycastapp on Twitter for the latest news and updates.",
			name: "Chingi-Lingi",
			title: "Hamlet",
			picture: "/FacePicture.png",
		},
		{
			quote:
				"We’d love to stay connected with you. If the feeling’s mutual,follow @raycastapp on Twitter for the latest news and updates.",
			name: "Chingi-Lingi",
			title: "A Dream Within a Dream",
			picture: "/FacePicture.png",
		},
		{
			quote:
				"We’d love to stay connected with you. If the feeling’s mutual,follow @raycastapp on Twitter for the latest news and updates.",
			name: "Chingi-Lingi",
			title: "Pride and Prejudice",
			picture: "/FacePicture.png",
		},
		{
			quote:
				"We’d love to stay connected with you. If the feeling’s mutual,follow @raycastapp on Twitter for the latest news and updates.",
			name: "Chingi-Lingi",
			title: "Moby-Dick",
			picture: "/FacePicture.png",
		},
	];
	const products = [
		{
			title: "Esfirra61",
			link: "",
			thumbnail: "/Esfirra2.png",
		},
		{
			title: "Treinador Ribeiro",
			link: "",
			thumbnail: "/Treinador1.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini1.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini3.png",
		},
		{
			title: "Treinador Ribeiro",
			link: "",
			thumbnail: "/Treinador2.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini4.png",
		},
		{
			title: "Esfirra61",
			link: "",
			thumbnail: "/Esfirra4.png",
		},
		{
			title: "Treinador Ribeiro",
			link: "",
			thumbnail: "/Treinador3.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini5.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini6.png",
		},
		{
			title: "Treinador Ribeiro",
			link: "",
			thumbnail: "/Treinador4.png",
		},
		{
			title: "Esfirra61",
			link: "",
			thumbnail: "/Esfirra3.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini7.png",
		},
		{
			title: "Pavanini",
			link: "https://pavanini.com/home",
			thumbnail: "/Pavanini8.png",
		},
		{
			title: "Esfirra61",
			link: "",
			thumbnail: "/Esfirra1.png",
		},
	];
	return (
		<div className="bg-custom-gradient min-h-screen">
			<HeroSection />
			<section className="h-fit">
				<HeroParallax products={products} />
			</section>
			<section className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<div className="relative mb-7 flex items-center justify-center w-fit h-fit  p-0.5 bg-[conic-gradient(from_90deg_at_50%_50%,#090EDB_0%,#71EBBA_50%,#090EDB_100%)] rounded-full shadow-lg">
						<div className="relative w-fit h-fit bg-[#0F0B15] rounded-full px-3 py-1 flex items-center justify-center">
							<span className="text-white text-sm font-normal">Reviews</span>
						</div>
					</div>
					<div className="flex gap-2 items-center">
						<h1 className="text-title-color 2xl:text-left text-center text-5xl font-bold leading-snug ">
							Nossos clientes <span className="text-kortex-color">aprovam</span>
						</h1>
						<FaRegCircleCheck className="text-kortex-color text-3xl" />
					</div>
					<p className="text-p-color mt-5 lg:w-10/12 text-center text-xl">
						Confira a nossa sessão de avaliações e veja o que nossos clientes
						têm a dizer! <br></br> Suas opiniões são importantes para nós.
					</p>
					<div className="h-fit mt-28 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
						<InfiniteMovingCards
							items={testimonials}
							direction="right"
							speed="slow"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
