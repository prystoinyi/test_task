import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

import css from './Dropdown.module.css'

interface Options <V extends number>{
    value: V;
    values: V[];
    onChange: (v: V) => void;
}

export default function Dropdown <V extends number>({ value, values, onChange }: Options<V>) {
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, []);

    return (
        <div ref={dropdownRef} className={css.dropdown}>
            <button className={css.btn} onClick={() => setOpen(!open)}>
                {value}% <ChevronDown className={`${css.icon}${open ? ` ${css.open}` : ''}`}/>
            </button>

            <ul className={`${css.list}${open ? ` ${css.open}` : ''}`}>
                {values.map((item) => {
                    return (
                        <li
                            key={item}
                            className={css.item}
                            onClick={() => {
                                onChange(item);
                                setOpen(false);
                            }}
                        >
                            <span>{item}%</span>
                            {value === item && <Check className={css.icon}/>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
