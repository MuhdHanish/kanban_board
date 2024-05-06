import { VscArrowSmallRight } from "react-icons/vsc";

export const MenuButtons = ({ handleMoveOpen, handleDelete }: { handleMoveOpen: () => void; handleDelete: () => void; }) => {
  return (
    <div className="flex flex-col z-10 absolute lg:hidden right-8 top-2 text-xs border rounded bg-neutral-800 border-neutral-700">
      <button
        onClick={handleMoveOpen}
        className="
            border-emerald-800/80 bg-emerald-800/20 text-emerald-500/80
            px-3 py-2 flex items-center transition-colors hover:border-emerald-800 hover:text-emerald-500"
      >
        Move <VscArrowSmallRight className="text-base" />
      </button>
      <button
        onClick={handleDelete}
        className="
            border-red-800/80 bg-red-800/20 text-red-500/80
            px-3 py-2 flex items-center transition-colors hover:border-red-800 hover:text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
