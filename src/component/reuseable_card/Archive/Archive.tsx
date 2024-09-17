import React from 'react';
import './Archive.css';

// Define the type for the year items
interface YearItem {
  id: number;
  text: string;
}

const Archive: React.FC = () => {
  // Define the Year array with type annotations
  const Year: YearItem[] = [
    { id: 1, text: "2021" },
    { id: 2, text: "2022" },
    { id: 3, text: "2023" },
    { id: 4, text: "2024" },
    { id: 5, text: "2025" },
    { id: 6, text: "2026" },
  ];

  return (
    <div>
      <div className='morenews_1'>
        {Year.map(({ id, text }) => (
          <div className="news_card_1" key={id}>
            <div className="news_card_text_1">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
