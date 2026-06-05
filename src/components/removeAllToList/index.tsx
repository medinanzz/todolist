import type { removeAllProps } from "../../home";

export const RemoveAllToList = ({ onRemoveAll, children }: removeAllProps) => {
    return (
        <button className="w-full p-2 mt-2 rounded-md cursor-pointer transition-all font-bold duration-300 hover:bg-[#444] bg-[#777] text-white dark:text-white dark:bg-[#2f384b] dark:hover:bg-[#2a2a2a]" onClick={onRemoveAll}>
            {children}
        </button>
    );
}