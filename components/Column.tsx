import { Card } from "./Card";
import { AddCard } from "./AddCard";
import { DragEvent, useState } from "react";
import { TCard, TColumnProps } from "@/types";
import { DropIndicator } from "./DropIndicator";

export const Column = ({ title, headingColor, cards, column, setCards }: TColumnProps) => {
  const [active, setActive] = useState(false);
  const filteredCards = cards?.filter(card => card?.column === column);

  const hanldeDragStart = (event: DragEvent, card: TCard) => {
    event.dataTransfer.setData("cardId", card?.id);
  };
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="text-sm text-neutral-400">{filteredCards?.length}</span>
      </div>
      <div
        className={`h-full w-full transition-colors 
        ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filteredCards?.map(card => <Card key={card?.id} card={card} hanldeDragStart={hanldeDragStart} />)}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards}/>
      </div>
    </div>
  );
};
