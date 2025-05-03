import React from "react";
import Image from "next/image";

function Contacts() {
	return (
		<section className="flex">
			<div className="w-1/2 flex flex-col gap-5">
				<h2>
					Entre em contato com a{" "}
					<span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
						KorteX
					</span>{" "}
					e tire seus projetos do {""}
					<span>
						papel{" "}
						<Image
							src="/assets/projectsdetail.svg"
							alt="ícone 3D do Kortex"
							width={200}
							height={200}
							className="w-fit h-fit mt-2 "
						/>
					</span>
				</h2>
				<p>
					Entre em contato hoje mesmo e vamos conversar sobre como podemos
					ajudar você a alcançar seus objetivos.
				</p>
			</div>
			<div className="w-1/2">
				<div className="mb-2">
					<input
						type="text"
						placeholder="Seu Nome"
						className="w-full min-h-[52px] px-4 py-2 border-2 text-dark-grey-900 placeholder:text-sm border-light-grey-900  rounded-lg focus:outline-none "
					/>
				</div>
				<div className="mb-2 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
					<input
						type="email"
						placeholder="Seu Email"
						className="w-full bg-none  text-dark-grey-900 placeholder:text-sm focus:outline-none "
					/>
				</div>
				<div className="mb-2 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
					<input
						type="email"
						placeholder="Assunto"
						className="w-full bg-none  text-dark-grey-900 placeholder:text-sm focus:outline-none "
					/>
				</div>

				<div className="mb-4 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
					<textarea
						placeholder="Confirme sua senha"
						className="w-full text-dark-grey-900  placeholder:text-sm focus:outline-none h-20 "
					/>
				</div>
				<button className="text-md -bg-linear-60 from-[#ffffff08] from-0% to-100% to-[#ffffff24] w-full py-3 rounded-lg ">
					Enviar{" "}
				</button>
			</div>
		</section>
	);
}

export default Contacts;

