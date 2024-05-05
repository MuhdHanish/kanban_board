import { DragEvent, useState } from "react";
import { TBurnBarrelProps } from "@/types";
import { BsTrash2, BsFire } from "react-icons/bs";

export const BurnBarrel = ({ setCards }: TBurnBarrelProps) => {
  const [active, setActive] = useState(false);
  const handleDragOver = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setActive(true);
  };
  const handleDragLeave = () => {
    setActive(false);
  };
  const handleDrop = (event: { dataTransfer: { getData: (arg0: string) => any; }; }) => { 
    const cardId = event.dataTransfer.getData("cardId");
    setCards((prev) => prev?.filter(card => card?.id !== cardId));
    setActive(false);
  };
  return <div
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    className={`hidden lg:grid mt-10 h-56 w-56 shrink-0 place-content-center rounded border text-3xl
    ${active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}>
    {active? <BsFire className="animate-bounce"/> : <BsTrash2/>}
    </div>;
};
