import React from "react";
import Image from "next/image";
function Header() {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="flex items-center gap-6">
				<Image
					src="assets/kortex-logo.svg"
					alt="Kortex Logo"
					width={50}
					height={50}
				/>
				<p className="font-medium text-2xl text-zinc-50">Kortex</p>
			</div>
			<ul className="flex gap-8">
				<li>
					<a href="#">Serviços</a>
				</li>
				<li>
					<a href="#">Empresa</a>
				</li>
				<li>
					<a href="#">Nossos Clientes</a>
				</li>
				<li>
					<a href="#">Contatos</a>
				</li>
			</ul>
			<button className="text-md -bg-linear-60 from-[#ffffff08] from-0% to-100% to-[#ffffff24] px-6 py-2 rounded-lg ">
				Fale conosco
			</button>
		</header>
	);
}

export default Header;

