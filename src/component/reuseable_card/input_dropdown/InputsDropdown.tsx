import React, { useState } from 'react';
import './InputDropdown.css';
import { RiArrowDownSLine } from "react-icons/ri";

const InputsDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('ALL');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options: string[] = [
        "The ACOLYTE", "TALES OF THE EMPIRE", "AHSOKA", "ANDOOR", "BEHIND THE SCENES",
        "BOOKS + COMICS", "CHARACTERS + HISTORIES", "COLLECTING", "CREATIVITY", "DISNEY PARKS",
        "EVENTS", "FANS + COMMUNITY", "FLIMS", "FORCE FOR CHANGE", "FORCE OF DESTINY",
        "GALLAXY OF ADVENTURES", "GAMES + APPS", "ILMXLAB", "IN POP CULTURE", "INTERVIEWS LEGO STAR WAR",
        "LUCASFLIM", "MERECHANDISE", "OBI-WAN KENOBI", "OPINIONS", "QUIZZES + POLLS", "RECIPES", "ROGUE ONE",
        "SOLO", "STAR WARS CELEBRATION", "STAR WARS DAY", "STAR WARS REBELS", "STAR WARS RESISTANCE", "SERIES",
        "THE BAD BATCH", "THE BOOK OF BOBA FETT", "THE CLONE WARS", "THE FORCE AWAKENS", "THE HIGH REPUBLIC",
        "THE LAST JEDI", "THE MANDALORIAN"
    ];

    return (
        <div>
            <div className='input-tab'>
                <div className="dropdown" onClick={handleToggle}>
                    <input
                        type="text"
                        value={selectedOption}
                        readOnly
                        placeholder='ALL'
                        className="dropdown-input"
                    />
                    <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
                        <RiArrowDownSLine />
                    </div>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputsDropdown;
