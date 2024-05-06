import { TColumn } from "@/types";
export const ColumnButtons = ({ handleMove, column }: { column: TColumn, handleMove: (column: TColumn) => void }) => {
  return (
    <div className="flex flex-col z-10 absolute lg:hidden right-8 top-2 text-xs border rounded bg-neutral-800 border-neutral-700">
      {column !== "backlog" && (
        <button
          onClick={() => handleMove("backlog")}
          className={`border-red-800/80 bg-red-800/20 text-red-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-red-800 hover:text-red-500`}
        >
          Backlog
        </button>
      )}
      {column !== "todo" && (
        <button
          onClick={() => handleMove("todo")}
          className={`border-yellow-800/80 bg-yellow-800/20 text-yellow-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-yellow-800 hover:text-yellow-500`}
        >
          Todo
        </button>
      )}
      {column !== "active" && (
        <button
          onClick={() => handleMove("active")}
          className={`border-blue-800/80 bg-blue-800/20 text-blue-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-blue-800 hover:text-blue-500`}
        >
          Active
        </button>
      )}
      {column !== "completed" && (
        <button
          onClick={() => handleMove("completed")}
          className={`border-emerald-800/80 bg-emerald-800/20 text-emerald-500/80
                px-3 py-2 flex items-center capitalize transition-colors hover:border-emerald-800 hover:text-emerald-500`}
        >
          Completed
        </button>
      )}
    </div>
  );
};
