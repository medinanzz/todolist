import { FaTrash } from "react-icons/fa"
import type { removeProps } from "../../home"

export const RemoveToList = ({ onRemove, id }: removeProps) => {
    return <button onClick={() => onRemove(id)} className='hover:text-red-500 cursor-pointer'>
        <FaTrash size={16} />
    </button>
}