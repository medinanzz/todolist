import { useEffect, useState } from "react";
import "./index.css";
import { AddToList } from "./components/addToList";
import { RemoveToList } from "./components/removeToList";
import { CompletedToList } from "./components/completedToList";
import { RemoveAllToList } from "./components/removeAllToList";

interface Todo {
  id: number;
  label: string;
  completed: boolean;
}

export interface addProps {
  onAdd(value: string): void;
}
export interface removeProps {
  onRemove(id: number): void;
  id: number;
}
export interface completedProps {
  onCompleted(id: number): void;
  id: number;
}

export interface removeAllProps {
  onRemoveAll(): void;
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
    setList([...list, { label: value, id: Date.now(), completed: false }]);
  };

  const handleRemove = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleCompleted = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  function handleRemoveAll() {
    setList([]);
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold text-center mb-4 uppercase">
        To Do List
      </h1>
      <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 pt-6 w-85 rounded-lg">
        <AddToList onAdd={handleAdd} />
        <RemoveAllToList onRemoveAll={handleRemoveAll} />
        <div className="relative mt-4">
          <ul className="w-full flex flex-col h-40 overflow-y-auto p-2 gap-2">
            {list.length > 0 ? (
              list.map((item) => (
                <li
                  key={item.id}
                  className="rounded-md hover:shadow-[0_2px_10px_rgb(0,0,0,.2)] w-full p-3 flex justify-between items-center "
                >
                  <span
                    className={
                      item.completed ? "line-through text-zinc-400 capitalize " : " capitalize"
                    }
                  >
                    {item.label}
                  </span>
                  <div className="flex gap-2">
                    <CompletedToList
                      onCompleted={handleCompleted}
                      id={item.id}
                    />
                    <RemoveToList onRemove={handleRemove} id={item.id} />
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
