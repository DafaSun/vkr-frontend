import React, { useState } from "react";
import styles from './DropdownList.module.css';

interface Person {
    id: number;
    fullName: string;
}

interface DropdownListProps {
    options: Person[];
    text:string;
    label: string;
    onSelect: (id: number) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({ options, text, label, onSelect }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = Number(event.target.value);
        setSelectedId(id);
        onSelect(id);
    };

    return (
        <div className={styles['dropdown-container']}>
            <div className={styles['text']}>
                {text}
            </div>
        <select className={styles['dpd']} value={selectedId ?? ""} onChange={handleChange}>
            <option value="" disabled>
                {label}
            </option>
            {options.map((person) => (
                <option key={person.id} value={person.id}>
                    {person.fullName}
                </option>
            ))}
        </select>
        </div>
    );
};
