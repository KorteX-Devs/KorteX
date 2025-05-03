import React from "react";

function Clients() {
	return (
		<section className="flex gap-20 flex-col items-center">
			<h2 className="text-center max-w-[800px]">
				O que dizem nossos{" "}
				<span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
					clientes
				</span>
			</h2>
			<div className="w-full flex gap-10 h-full justify-center overflow-x-auto">
				<div className="flex flex-col gap-4 p-10 -bg-linear-60 from-[#8d8d8d09] from-0% to-100% w-[500px] relative to-[#ffffff0c] h-1/3 rounded-3xl border-2 border-[#ffffff09] justify-center">
					<h3>Person Name</h3>
					<p>
						We’d love to stay connected with you. If the feeling’s mutual,
						follow @raycastapp on Twitter for the latest news and updates.
					</p>
				</div>
				<div className="flex flex-col gap-4 p-10 -bg-linear-60 from-[#8d8d8d09] from-0% to-100% w-[500px] relative to-[#ffffff0c] h-1/3 rounded-3xl border-2 border-[#ffffff09] justify-center">
					<h3>Person Name</h3>
					<p>
						We’d love to stay connected with you. If the feeling’s mutual,
						follow @raycastapp on Twitter for the latest news and updates.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Clients;

