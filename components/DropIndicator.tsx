import { TDropsIndicatorProps } from "@/types";

export const DropIndicator = ({ beforeId, column }: TDropsIndicatorProps) => {
  return <div
    data-before={beforeId || "-1"}
    data-column={column}
    className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
  />
};
