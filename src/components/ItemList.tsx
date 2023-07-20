import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

interface IItemListProps {
    text: string,
    description: string,
    isOpenDescription: boolean,
    onClick: () => void,
}

export function ItemList({ text, description, isOpenDescription, onClick }: IItemListProps) {

    return (
        <>
            <li
                className='w-full rounded-md bg-[#DB292E] px-6 py-2 text-white font-semibold text-2xl'
            >
                <div className="flex w-full items-center justify-between gap-4">
                    <p>{text}</p>

                    {isOpenDescription ?
                        (<CaretUp className="cursor-pointer" onClick={onClick} />)
                    :
                        (<CaretDown className="cursor-pointer" onClick={onClick} />)
                    }
                </div>
            </li>
            {isOpenDescription && (
                <span className="w-full border p-4">
                    {description}
                </span>
            )}
        </>
    );
}