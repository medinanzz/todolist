import { FaCheck } from "react-icons/fa";
import type { completedProps } from "../../home";

export const CompletedToList = ({ onCompleted, id }: completedProps) => {
    return <button onClick={() => onCompleted(id)} className='hover:text-green-500 cursor-pointer'>
        <FaCheck size={16} />
    </button>
}