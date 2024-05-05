import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FormEvent, useState } from "react";
import { TAddCardProps, TCard } from "@/types";

export const AddCard = ({ column, setCards }: TAddCardProps) => {
  const [title, setTitle] = useState("");
  const [adding, setAdding] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    if (!title.trim().length) return;
    const card: TCard = {
      id: Math.random().toString(),
      title: title.trim(),
      column
    };
    setCards((prev) => [...prev, card]);
    setAdding(false);
  };
  return (
    <>
      {adding ? (
        <motion.form
          layout
          onSubmit={handleSubmit}>
          <textarea
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none"
          />
          <div className="flex items-center justify-end mt-1.5 gap-1.5 text-xs">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5  text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 flex items-center gap-1.5 rounded bg-neutral-50 text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 outline-none"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};
