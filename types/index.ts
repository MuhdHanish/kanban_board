import { Dispatch, SetStateAction, MouseEvent, TouchEvent, PointerEvent, DragEvent } from "react";

export type TColumn = "backlog" | "todo" | "active" | "completed";
export type TColumnProps = {
  title: string;
  headingColor: string;
  column: TColumn;
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;
};

export type TCard = {
  id: string;
  title: string;
} & Pick<TColumnProps, "column">;

export type TCardProps = {
  card: TCard;
  hanldeDragStart: (event: any, card: TCard) => void;
} & Pick<TColumnProps, "setCards">;


type ExtractIdType<T> = T extends { id: infer U } ? U : never;

export type TDropsIndicatorProps = {
  beforeId: ExtractIdType<TCard>;
} & Pick<TColumnProps, "column">;

export type TBurnBarrelProps = Pick<TColumnProps, "setCards">;

export type TAddCardProps = Pick<TColumnProps, "setCards" | "column">;