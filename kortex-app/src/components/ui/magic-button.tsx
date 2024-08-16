import React from "react";
import { MdInsertLink } from "react-icons/md";

interface MagicButtonProps {
	children: React.ReactNode;
}

function MagicButton({ children }: Readonly<MagicButtonProps>) {
	return (
		<button className="w-fit relative inline-flex h-fit overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#090EDB_0%,#71EBBA_50%,#090EDB_100%)]" />
			<span className="md:text-base text-sm  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 font-medium text-white backdrop-blur-3xl">
				{children}
			</span>
		</button>
	);
}

export function TailwindButton({ children }: Readonly<MagicButtonProps>) {
	return (
		<button className="bg-slate-800 no-underline group cursor-pointer w-fit relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs md:text-s font-semibold leading-6  text-white inline-block">
			<span className="absolute inset-0 overflow-hidden rounded-full">
				<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
			</span>
			<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-8 ring-1 ring-white/10 ">
				<span>{children}</span>
				<MdInsertLink />
			</div>
			<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
		</button>
	);
}

export default MagicButton;
