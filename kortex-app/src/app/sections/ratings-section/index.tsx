import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { reviews } from "@/app/data/reviewsInfo";
import Badge from "@/components/badge";

function RatingsSection() {
	return (
		<section className="h-[80vh] flex flex-col items-center w-full justify-center">
			<div className="flex flex-col items-center">
				<Badge>Reviews</Badge>
				<div className="flex gap-2 items-center">
					<h1 className="text-title-color 2xl:text-left text-center text-5xl font-bold leading-snug ">
						Nossos clientes <span className="text-kortex-color">aprovam</span>
					</h1>
					<FaRegCircleCheck className="text-kortex-color text-3xl" />
				</div>
				<p className="text-p-color mt-5 lg:w-10/12 text-center text-xl">
					Confira a nossa sessão de avaliações e veja o que nossos clientes têm
					a dizer! <br></br> Suas opiniões são importantes para nós.
				</p>
				<div className="h-fit mt-28 rounded-md flex flex-col antialiased w-[100vw] items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards items={reviews} direction="right" speed="slow" />
				</div>
			</div>
		</section>
	);
}

export default RatingsSection;
