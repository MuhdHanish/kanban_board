import { TCardProps } from "@/types";
import { motion } from "framer-motion";
import { DropIndicator } from "./DropIndicator";
import { useEffect, useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Card = ({ card, hanldeDragStart, setCards }: TCardProps) => {
  const { id, title, column } = card;
  const [open, setOpen] = useState(false);
   const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current?.contains(event?.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure you want delete this ?`);
    if (!confirm) return;
    setCards(prev => prev?.filter(card => card?.id !== id));
  }
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable
        ref={cardRef}
        onDragStart={(event) => hanldeDragStart(event, card)}
        className="cursor-grab rounded  border border-neutral-700 bg-neutral-800 p-5 lg:p-3 active:cursor-grabbing relative"
      >
        <p className="text-sm text-neutral-100 break-words">{title}</p>
        <BiDotsVerticalRounded
          onClick={() => setOpen((prev) => !prev)}
          className="absolute lg:hidden right-1 top-2 text-lg text-neutral-100 cursor-pointer"
        />
        {open && (
          <button
            onClick={handleDelete}
            className="absolute lg:hidden right-8 top-2 text-xs border
            border-red-800/80 bg-red-800/20 text-red-500/80
            px-3 py-1.5 flex items-center rounded transition-colors hover:border-red-800 hover:text-red-500"
          >
            Delete
          </button>
        )}
      </motion.div>
    </>
  );
};
