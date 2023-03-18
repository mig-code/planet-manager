import React, { useState } from 'react';

import './checkbox.input.scss';

function CheckboxCollectionInput({
    options,
    checkedOptions,
    onSelectionChange,
}: {
    options: string[];
    checkedOptions: string[] | undefined;
    onSelectionChange: (selectedOptions: string[]) => void;
}) {
    const initialSelectedOptions = checkedOptions || [];

    const [selectedOptions, setSelectedOptions] = useState(
        initialSelectedOptions
    );
  

    const handleCheckboxChange = (option: string) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((selectedOption) => selectedOption !== option)
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
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export default CheckboxCollectionInput;
