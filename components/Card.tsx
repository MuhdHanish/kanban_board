import { motion } from "framer-motion";
import { DropIndicator } from "./DropIndicator";
import { TCardProps, TColumnProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
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
          onClick={() => setMenuOpen((prev) => !prev)}
          className="absolute lg:hidden right-1 top-2 text-lg text-neutral-100 cursor-pointer"
        />
        {menuOpen && (
          <div className="flex flex-col z-10 absolute lg:hidden right-8 top-2 text-xs border rounded bg-neutral-800 border-neutral-700">
            <button
              onClick={handleMoveOpen}
              className="
            border-emerald-800/80 bg-emerald-800/20 text-emerald-500/80
            px-3 py-2 flex items-center transition-colors hover:border-emerald-800 hover:text-emerald-500"
            >
              Move <VscArrowSmallRight className="text-base" />
            </button>
            <button
              onClick={handleDelete}
              className="
            border-red-800/80 bg-red-800/20 text-red-500/80
            px-3 py-2 flex items-center transition-colors hover:border-red-800 hover:text-red-500"
            >
              Delete
            </button>
          </div>
        )}
        {toMoveOpen && (
          <div className="flex flex-col z-10 absolute lg:hidden right-8 top-2 text-xs border rounded bg-neutral-800 border-neutral-700">
            {column !== "backlog" && <button
              onClick={() => handleMove("backlog")}
              className={`border-red-800/80 bg-red-800/20 text-red-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-red-800 hover:text-red-500`}
            >
              Backlog
            </button>}
            {column !== "todo" && <button
              onClick={() => handleMove("todo")}
              className={`border-yellow-800/80 bg-yellow-800/20 text-yellow-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-yellow-800 hover:text-yellow-500`}
            >
              Todo
            </button>}
            {column !== "active" && <button
              onClick={() => handleMove("active")}
              className={`border-blue-800/80 bg-blue-800/20 text-blue-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-blue-800 hover:text-blue-500`}
            >
              Active
            </button>}
            {column !== "completed" && <button
              onClick={() => handleMove("completed")}
              className={`border-emerald-800/80 bg-emerald-800/20 text-emerald-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-emerald-800 hover:text-emerald-500`}
            >
              Completed
            </button>}
          </div>
        )}
      </motion.div>
    </>
  );
};
