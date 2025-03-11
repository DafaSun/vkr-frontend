import React, { useEffect, useState } from "react";
import styles from "./DropdownList.module.css";

interface Person {
    id: number;
    fullName: string;
}

interface DropdownListProps {
    options: Person[];
    text: string;
    label: string;
    value?: number; // Добавил пропс для начального значения
    onSelect: (id: number) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({ options, text, label, value, onSelect }) => {
    const [selectedId, setSelectedId] = useState<number | null>(value ?? null);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedId(value);
        }
    }, [value]); // Следим за изменением value и обновляем selectedId

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = Number(event.target.value);
        setSelectedId(id);
        onSelect(id);
    };

    return (
        <div className={styles['dropdown-container']}>
            <div className={styles['text']}>{text}</div>
            <select className={styles['dpd']} value={selectedId ?? ""} onChange={handleChange}>
                <option value="" disabled>{label}</option>
                {options.map((person) => (
                    <option key={person.id} value={person.id}>
                        {person.fullName}
                    </option>
                ))}
            </select>
        </div>
    );
};
