import React,{useState} from 'react'
import './InputDropdown.css'
import { RiArrowDownSLine } from "react-icons/ri";

const InputsDropdown = () => {
    const [isOpen , setIsopen] =useState(false);
    const [selectedOption, setSelectedOption] = useState('ALL');
    const handleToggle =()=>{
        setIsopen(!isOpen);
    }
    const handleOptionClick =(option) =>{
        setSelectedOption(option);
        setIsopen(false);
    }
    const option = [
        "The ACOLYTE", "TALES OF THE EMPIRE", "AHSOKA", "ANDOOR", "BEHIND THE SCENES",
        "BOOKS + COMICS", "CHARACTERS + HISTORIES", "COLLECTING", "CREATIVITY", "DISNEY PARKS",
        "EVENTS", "FANS + COMMUNITY", "FLIMS", "FORCE FOR CHANGE", "FORCE OF DESTINY",
        "GALLAXY OF ADVENTURES","GAMES + APPS", "ILMXLAB", "IN POP CULTURE", "INTERVIEWS LEGO STAR WAR",
        "LUCASFLIM", "MERECHANDISE","OBI-WAN KENOBI", "OPINIONS","QUIZZES+POLLS","RECIPES","RIUGUE ONE",
         "SOLO","STAR WARS CELEBRATION","STAR WARS DAY","STAR WARS REBELS","STAR WARS RESISTANCE","SERIES",
          "THE BAD BATCH","THE BOOK OF BOBA FETT","THE CLONE WARS","THE FORCE AWAKENS","THE HIGH REPUBLIC",
          "THE LAST JEDI","THE MENDALORIAN"
    ]
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
          <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}><RiArrowDownSLine /></div>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {option.map((option, index) => (
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
  )
}

export default InputsDropdown;
