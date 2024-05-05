import { TCard } from "@/types";
import { useState } from "react";
import { Column } from "./Column";
import { DEFAULT_CARDS } from "@/lib/data";
import { BurnBarrel } from "./BurnBarrel";

export const Board = () => {
  const [cards, setCards] = useState<TCard[]>(DEFAULT_CARDS);
  return <div className="flex h-full w-full gap-3 overflow-auto p-12">
    <Column
      title="Backlog"
      column="backlog"
      headingColor="text-neutral-500"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="TODO"
      column="todo"
      headingColor="text-yellow-200"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="In Progress"
      column="doing"
      headingColor="text-blue-200"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="Completed"
      column="done"
      headingColor="text-emerald-200"
      cards={cards}
      setCards={setCards}
    />
    <BurnBarrel setCards={setCards}/>
  </div>;
};