import React, { ReactNode } from "react";

interface MagicButtonProps {
  children: React.ReactNode;
}

function MagicButton({ children }: Readonly<MagicButtonProps>) {
  return (
    <button className="w-fit relative inline-flex h-fit overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#090EDB_0%,#71EBBA_50%,#090EDB_100%)]" />
      <span className="text-base  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}

export default MagicButton;
