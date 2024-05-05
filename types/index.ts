import { Dispatch, SetStateAction } from "react";

export type TCard = {};

export type TColumnProps = {
  title: string;
  headingColor: string;
  column: string;
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;
};