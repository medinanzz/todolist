import type { removeProps } from "../../home"

export const RemoveToList = ({ onRemove, id, children }: removeProps) => {
    return <button onClick={() => onRemove(id)} className='h-8 rounded-md flex items-center justify-center hover:bg-red-600 w-8 text-white bg-red-500 cursor-pointer'>
        {children}
    </button>
}