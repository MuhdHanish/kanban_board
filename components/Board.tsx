import { TCard } from "@/types";
import { Column } from "./Column";
import { BurnBarrel } from "./BurnBarrel";
import { useEffect, useState } from "react";

export const Board = () => {
  const [cards, setCards] = useState<TCard[]>([]);
  const [haschecked, setHasChecked] = useState(false);
  useEffect(() => {
    haschecked &&
      localStorage.setItem("kanban_board_cards", JSON.stringify(cards));
  }, [cards, haschecked]);
  useEffect(() => {
    const cardsData = localStorage.getItem("kanban_board_cards");
    setCards(cardsData ? JSON.parse(cardsData) : []);
    setHasChecked(true);
  }, []);
  return (
    <div className="flex flex-col h-full w-full p-4 lg:flex-row lg:gap-3 lg:overflow-auto lg:p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-red-400"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Todo"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Active"
        column="active"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Completed"
        column="completed"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};
