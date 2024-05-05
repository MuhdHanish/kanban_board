import { Dispatch, SetStateAction } from "react";

export type TColumnProps = {
  title: string;
  headingColor: string;
  column: string;
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;
};

export type TCard = {
  id: string;
  title: string;
} & Pick<TColumnProps, "column">;


type ExtractIdType<T> = T extends { id: infer U } ? U : never;

export type TDropsIndicatorProps = {
  beforeId: ExtractIdType<TCard>;
} & Pick<TColumnProps, "column">;

export type TBurnBarrelProps = Pick<TColumnProps, "setCards">;