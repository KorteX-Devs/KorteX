import Image from "next/image";

export function Footer() {
	return (
		<footer className="w-full h-20 flex items-center justify-center text-p-color mb-20">
			{/* Conteúdo do footer */}
			<div className="flex w-full max-w-[1240px] md:flex-row flex-col-reverse items-center gap-4 justify-around">
				<p>&copy; 2024 KorteX.</p>
				<div className="flex justify-between w-60">
					<Image
						src="/Instagram.svg"
						alt="instagram logo"
						width={40}
						height={40}
					/>
					<Image src="/Github.svg" alt="github logo" width={40} height={40} />
					<Image src="/Whats.svg" alt="whatsapp logo" width={40} height={40} />
					<Image
						src="/Linkedin.svg"
						alt="linkedin logo"
						width={40}
						height={40}
					/>
				</div>
				<Image src="/KorteX.svg" alt="KorteX logo" width={163} height={78} />
			</div>
		</footer>
	);
}
