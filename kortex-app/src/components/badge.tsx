import React from "react";

interface BadgeProps {
	children: React.ReactNode;
}

function Badge({ children }: Readonly<BadgeProps>) {
	return (
		<div className="relative mb-7 flex items-center justify-center w-fit h-fit  p-0.5 bg-[conic-gradient(from_90deg_at_50%_50%,#090EDB_0%,#71EBBA_50%,#090EDB_100%)] rounded-full shadow-green">
			<div className="relative w-fit h-fit bg-[#0F0B15] rounded-full px-3 py-1 flex items-center justify-center">
				<span className="text-white text-sm font-normal">{children}</span>
			</div>
		</div>
	);
}

export default Badge;
