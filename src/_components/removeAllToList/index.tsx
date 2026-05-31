import type { removeAllProps } from "../../home";

export const RemoveAllToList = ({ onRemoveAll }: removeAllProps) => {
    return (
        <button className="w-full p-2 mt-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#444] bg-[#777] text-white" onClick={onRemoveAll}>
            Remover tudo
        </button>
    );
}