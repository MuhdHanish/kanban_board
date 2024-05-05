import { TCardProps } from "@/types";
import { DropIndicator } from "./DropIndicator";

export const Card = ({ card, hanldeDragStart }: TCardProps) => {
  const { id, title, column } = card;
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable
        onDragStart={(event) => hanldeDragStart(event, card)}
        className="cursor-grab rounded  border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};
