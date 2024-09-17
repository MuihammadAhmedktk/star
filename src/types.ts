
export interface MenuOption {
    id: number; // Ensure this matches everywhere
    text: string;
    count: number;
  }

export interface VideoItem {
    id:  number; // Ensure this matches everywhere
    img: string;
    text: string;
    link?: string; // Optional property
  time?: string; // Optional property
  }
  
  export interface CategoryData {
    [category: string]: VideoItem[];
  }
 