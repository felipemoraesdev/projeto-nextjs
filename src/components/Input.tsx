import { ChangeEventHandler } from "react";

interface IInputProps {
    label: string;
    name: string;
    value: string;
    handlechange: (value: string) => void;
}

export function Input({ label, name, value, handlechange }: IInputProps) {

    function handleChange(valueChange: string) {
        handlechange(valueChange)
    }

    return (
        <div className="">
            <label htmlFor={name}>{label}*</label>
            <input 
                type="text" 
                name={name} 
                onChange={(event) => handleChange(event.target.value)} 
                value={value}
                className='w-full border border-black rounded'
            />
        </div>
    )
}