import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

function Footer() {
	return (
		<footer className="w-full h-20 flex items-center justify-center text-p-color mb-20">
			<div className="flex w-full max-w-[1240px] md:flex-row flex-col-reverse items-center gap-4 justify-around">
				<p>&copy; 2025 KorteX.</p>
				<div className="flex justify-between w-60">
					<a href="https://www.instagram.com/kortex_tecnologia/" target="blank">
						<FaInstagram className="text-4xl" />
					</a>
					<a href="https://github.com/KorteX-Devs" target="blank">
						<FiGithub className="text-4xl" />
					</a>
					<a href="#">
						<FaWhatsapp className="text-4xl" />
					</a>
					<a href="#">
						<FaLinkedinIn className="text-4xl" />
					</a>
				</div>
				<button>
					<div className="flex items-center gap-6">
						<Image
							src="assets/kortex-logo.svg"
							alt="Kortex Logo"
							width={50}
							height={50}
						/>
						<p className="font-medium text-2xl text-zinc-50">Kortex</p>
					</div>
				</button>
			</div>
		</footer>
	);
}

export default Footer;

