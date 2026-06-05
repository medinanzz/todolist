import type { completedProps } from "../../home";

export const CompletedToList = ({ onCompleted, id, children }: completedProps) => {
    return <button onClick={() => onCompleted(id)} className='bg-green-500 hover:bg-green-600 transition-all duration-300 px-3 py-1 rounded-md cursor-pointer text-white'>
        {children}
    </button>
}