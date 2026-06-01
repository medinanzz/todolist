import { useEffect, useState } from "react";
import "./index.css";
import { AddToList } from "./components/addToList";
import { RemoveToList } from "./components/removeToList";
import { CompletedToList } from "./components/completedToList";
import { RemoveAllToList } from "./components/removeAllToList";
import { FiCheck, FiX } from "react-icons/fi";

interface Todo {
  id: number;
  label: string;
  completed: boolean;
  removing: boolean;
}

export interface addProps {
  onAdd(value: string): void;
  children?: React.ReactNode;
}
export interface removeProps {
  onRemove(id: number): void;
  id: number;
  children?: React.ReactNode;
}
export interface completedProps {
  onCompleted(id: number): void;
  id: number;
  children?: React.ReactNode;
}
export interface removeAllProps {
  onRemoveAll(): void;
  children?: React.ReactNode;
}

export const Home = () => {
  const [list, setList] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("list");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleAdd = (value: string) => {
    if (!value) return;
    setList([
      ...list,
      { label: value, id: Date.now(), completed: false, removing: false },
    ]);
  };

  const handleRemove = (id: number) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, removing: true } : item)),
    );

    setTimeout(() => {
      setList((prev) => prev.filter((item) => item.id !== id));
    }, 300);
  };

  const handleCompleted = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  function handleRemoveAll() {
    setList((prev) => prev.map((item) => ({ ...item, removing: true })));

    setTimeout(() => {
      setList([]);
    }, 300);
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col pl-2 pr-2 ">
      <h1 className="text-3xl font-bold text-center mb-4 uppercase animate-show">
        To Do List
      </h1>
      <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] p-4 pt-6 max-w-85 w-full rounded-lg animate-show">
        <AddToList onAdd={handleAdd}>Adicionar na lista</AddToList>
        <RemoveAllToList onRemoveAll={handleRemoveAll}>
          Remover todos
        </RemoveAllToList>
        <div className="relative mt-4">
          <ul
            className={`w-full flex flex-col p-2 transition-all duration-200 gap-2 ${
              list.length === 0
                ? "items-center justify-center h-20"
                : "h-50 overflow-y-auto overflow-x-hidden"
            }`}
          >
            {list.length > 0 ? (
              list.map((item) => (
                <li
                  key={item.id}
                  className={`rounded-md hover:shadow-[0_2px_10px_rgb(0,0,0,.2)] w-full p-3 transition-all duration-100 flex justify-between items-center ${item.removing ? "animate-show-li-hide" : "animate-show-li"}`}
                >
                  <span
                    className={
                      item.completed
                        ? "line-through text-zinc-400 capitalize "
                        : " capitalize"
                    }
                  >
                    {item.label}
                  </span>
                  <div className="flex gap-2">
                    <CompletedToList onCompleted={handleCompleted} id={item.id}>
                      <FiCheck />
                    </CompletedToList>
                    <RemoveToList onRemove={handleRemove} id={item.id}>
                      <FiX />
                    </RemoveToList>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-center text-zinc-500 ">
                Não há item na lista
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
