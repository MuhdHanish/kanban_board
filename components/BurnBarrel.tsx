import { useState } from "react";
import { TBurnBarrelProps } from "@/types";
import { BsTrash2, BsFire } from "react-icons/bs";

export const BurnBarrel = ({ }: TBurnBarrelProps) => {
  const [active, setActive] = useState(false);
  return <div
    className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl
    ${active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}>
    {active? <BsFire className="animate-bounce"/> : <BsTrash2/>}
    </div>;
};
