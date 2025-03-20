import React, {useEffect, useState} from "react";
import styles from "./DropdownList.module.css";

interface Person {
    id: string;
    fullName: string;
}

interface DropdownListProps {
    options: Person[];
    text?: string;
    label?: string;
    value?: string;
    onSelect?: (id: string) => void;
    width?: number;
    height?: number;
    isEdit?: boolean;
}

export const DropdownList: React.FC<DropdownListProps> = ({
                                                              isEdit = true,
                                                              options,
                                                              text,
                                                              label,
                                                              value,
                                                              onSelect = (() => {
                                                              }),
                                                              width,
                                                              height
                                                          }) => {
    const [selectedId, setSelectedId] = useState<string | null>(value ?? null);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedId(value);
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!isEdit) return;
        const id = event.target.value;
        setSelectedId(id);
        onSelect(id);
    };

    return (
        <div className={styles['dropdown-container']}>
            <div className={styles['text']}>{text}</div>
            <select style={{width, height}} className={styles['dpd']} value={selectedId ?? ""} onChange={handleChange}>
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
