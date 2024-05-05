import { TCard } from "@/types";
import { DropIndicator } from "./DropIndicator";

export const Card = ({ id, title, column }: TCard) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable
        className="cursor-grab rounded  border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};
