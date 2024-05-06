import { TCardProps } from "@/types";
import { motion } from "framer-motion";
import { MenuButtons } from "./MenuButtons";
import { ColumnButtons } from "./ColumnButtons";
import { DropIndicator } from "./DropIndicator";
import { useEffect, useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Card = ({ card, hanldeDragStart, setCards }: TCardProps) => {
  const { id, title, column } = card;
  const [menuOpen, setMenuOpen] = useState(false);
  const [toMoveOpen, setToMoveOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current?.contains(event?.target as Node)
      ) {
        setMenuOpen(false);
        setToMoveOpen(false);
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
    setCards((prev) => prev?.filter((card) => card?.id !== id));
  };
  const handleMenuOpen = () => {
    setToMoveOpen(false);
    setMenuOpen(prev => !prev);
  }
  const handleMoveOpen = () => {
    setMenuOpen(false);
    setToMoveOpen(true);
  };
  const handleMove = (column: "backlog" | "todo" | "active" | "completed") => {
    const newCard = { ...card, column };
    setCards((prev) => prev?.filter((card) => card?.id !== id));
    setCards((prev) => [...prev, newCard]);
  };
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
          onClick={handleMenuOpen}
          className="absolute lg:hidden right-1 top-2 text-lg text-neutral-100 cursor-pointer"
        />
        {menuOpen && <MenuButtons handleMoveOpen={handleMoveOpen} handleDelete={handleDelete}/>}
        {toMoveOpen && <ColumnButtons column={column} handleMove={handleMove}/>}
      </motion.div>
    </>
  );
};
