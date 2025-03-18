import React, { useEffect, useState } from "react";
import styles from "./DropdownList.module.css";

interface Person {
    id: string;
    fullName: string;
}

interface DropdownListProps {
    options: Person[];
    text: string;
    label: string;
    value?: string;
    onSelect: (id: string) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({ options, text, label, value, onSelect }) => {
    const [selectedId, setSelectedId] = useState<string | null>(value ?? null);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedId(value);
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.value;
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
