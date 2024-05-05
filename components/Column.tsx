import { Card } from "./Card";
import { AddCard } from "./AddCard";
import { useState } from "react";
import { TCard, TColumnProps } from "@/types";
import { DropIndicator } from "./DropIndicator";

export const Column = ({ title, headingColor, cards, column, setCards }: TColumnProps) => {
  const [active, setActive] = useState(false);
  const filteredCards = cards?.filter(card => card?.column === column);

  const getInidicator = () => {
    return Array.from(document.querySelectorAll(`[data-column=${column}]`)) as HTMLElement[];
  };
  const getNearestIndicator = (event: any, indicators?: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;
    const nearest = indicators?.reduce((closest: any, child: Element) => {
      const box = child.getBoundingClientRect();
      const offset = event.clientY - (box.top + DISTANCE_OFFSET);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1]
      }
    )
    return nearest;
  };
  const clearHighLights = (elements?: HTMLElement[]) => {
    const indicators = elements || getInidicator();
    indicators?.forEach(element => element.style.opacity = "0");
  };
  const highLightIndicator = (event: any) => {
    const indicators = getInidicator();
    clearHighLights(indicators)
    const nearest = getNearestIndicator(event, indicators);
    nearest.element.style.opacity = "1";
  };
  const hanldeDragStart = (event: { dataTransfer: { setData: (arg0: string, arg1: string) => void; }; }, card: TCard) => {
    event.dataTransfer.setData("cardId", card?.id);
  };
  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    highLightIndicator(event);
    setActive(true);
  };
  const handleDragLeave = () => {
    setActive(false);
    clearHighLights();
  };
  const handleDrop = (event: { dataTransfer: { getData: (arg0: string) => any; }; }) => {
    setActive(false);
    clearHighLights();
    const cardId = event.dataTransfer.getData("cardId");
    const indicators = getInidicator();
    const { element } = getNearestIndicator(event, indicators);
    const before = element.dataset.before || "-1";
    if (before !== cardId) {
      let cardsCopy = [...cards];
      let cardToTransfer = cardsCopy?.find(card => card?.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };
      cardsCopy = cardsCopy?.filter(card => card?.id !== cardId);
      const moveToBack = before === "-1";
      if (moveToBack) {
        cardsCopy?.push(cardToTransfer);
      } else {
        const insertAtIndex = cardsCopy?.findIndex(card => card?.id === before);
        if (insertAtIndex === undefined) return;
        cardsCopy?.splice(insertAtIndex, 0, cardToTransfer);
      }
      setCards(cardsCopy);
    }
  };
  return (
    <div className="flex-1 mb-2.5 lg:mb-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor} uppercase`}>{title}</h3>
        <span className="text-sm text-neutral-400">{filteredCards?.length}</span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`h-full w-full transition-colors 
        ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filteredCards?.map(card => <Card key={card?.id} card={card} hanldeDragStart={hanldeDragStart} setCards={setCards}/>)}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};
