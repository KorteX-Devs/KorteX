"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MagicButton, { TailwindButton } from "./magic-button";

type Tab = {
	title: string;
	value: string;
	title_text: string;
	paragraph_text?: string;
	content?: string | React.ReactNode | any;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<>
			<div
				className={cn(
					"flex flex-row xl:flex-col 2xl:flex-row h-fit items-start 2xl:items-center justify-center [perspective:1500px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-fit 2xl:max-w-full 2xl:w-full",
					containerClassName
				)}
			>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.title}
						onClick={() => {
							moveSelectedTabToTop(idx);
						}}
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
						className={cn("relative px-4 py-2 rounded-full", tabClassName)}
						style={{
							transformStyle: "preserve-3d",
						}}
					>
						{active.value === tab.value && (
							<motion.div
								layoutId="clickedbutton"
								transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
								className={cn(
									"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
									activeTabClassName
								)}
							/>
						)}

						<span className="relative block text-black text-xs md:text-xl text-left dark:text-white">
							{tab.title}
						</span>
					</button>
				))}
			</div>
			<FadeInDiv
				tabs={tabs}
				active={active}
				key={active.value}
				hovering={hovering}
				className={cn("mt-32", contentClassName)}
			/>
		</>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering,
	active,
}: {
	className?: string;
	key?: string;
	tabs: Tab[];
	active: Tab;
	hovering?: boolean;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};

	return (
		<div className="relative w-full h-fit flex flex-col 2xl:flex-row gap-10 2xl:gap-20 justify-end 2xl:justify-end items-center 3xl:items-between">
			<div className="relative w-full md:w-full xl:w-4/6 h-fit">
				{tabs.map((tab, idx) => (
					<motion.div
						key={tab.value}
						layoutId={tab.value}
						style={{
							top: hovering ? idx * -20 : 0,
							zIndex: -idx,
							opacity: idx < 3 ? 1 : 0,
							position: idx === 0 ? "relative" : "absolute",
						}}
						className={cn("w-full flex h-fit", className)}
					>
						<div className="w-full relative">{tab.content}</div>
					</motion.div>
				))}
			</div>
			<div className=" w-full xl:w-4/6 2xl:w-3/6 flex justify-start">
				{isActive(active) && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center xl:items-start gap-8"
					>
						<h1 className="font-bold 2xl:text-4xl text-center xl:text-left text-2xl text-white">
							{active.title_text}
						</h1>
						<p className="text-p-color lg:w-10/12 text-center xl:text-left text-md 2xl:text-lg">
							{active.paragraph_text}
						</p>
						<TailwindButton>Conheça o site</TailwindButton>
					</motion.div>
				)}
			</div>
		</div>
	);
};
