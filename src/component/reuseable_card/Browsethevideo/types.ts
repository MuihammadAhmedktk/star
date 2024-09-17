// types.ts
export interface MenuItem {
    id: string | number;
    text: string;
    link: string;
    count?: number; // Optional because it is calculated dynamically
  }
  
  export interface VideoItem {
    id: number; // Ensure id is consistently a string
    img: string;
    text: string;
    link?: string;
    time?: string;
  }
  
  export interface Videos {
    [key: string]: VideoItem[];
  }
  