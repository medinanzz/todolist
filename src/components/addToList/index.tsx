import { useState } from "react";
import type { addProps } from "../../home";

export const AddToList = ({ onAdd, children }: addProps) => {
  const [value, setValue] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);   
  };
  const handleAdd = () => {
    if (!value) return;
    onAdd(value);
    setValue(""); // ✅ limpa após adicionar
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          className="border-2 p-3 rounded-md placeholder:text-zinc-500 dark:placeholder:text-zinc-500 hover:border-blue-500 focus:border-blue-500 border-gray-300 outline-0 transition-all duration-300"
          placeholder="Adicionar uma nova tarefa..."
          value={value}
          onChange={handleInput}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold p-2 rounded transition-colors duration-300"
          onClick={handleAdd}
        >
          {children}
        </button>
      </div>
    </>
  );
};
