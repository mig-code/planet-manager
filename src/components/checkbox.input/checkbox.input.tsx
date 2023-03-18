import React, { useState } from 'react';

import './checkbox.input.scss';

export function CheckboxInput({
    options,
    checkedOptions,
    onSelectionChange,
}: {
    options: string[];
    checkedOptions: string[] | null;
    onSelectionChange: (selectedOptions: string[]) => void;
}) {
    const initialSelectedOptions = checkedOptions || [];

    const [selectedOptions, setSelectedOptions] = useState(
        initialSelectedOptions
    );

    const handleCheckboxChange = (option: string) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(
                (selectedOption) => selectedOption !== option
            )
            : [...selectedOptions, option];
        setSelectedOptions(updatedOptions);
        onSelectionChange(updatedOptions);
    };

    return (
        <div className="checkbox-input">
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        data-testid={`${option}-checkbox`}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}
