export type TimeType = {
  hours: number;
  minutes: number;
  seconds: number;
}

export type ContRefType = {
  current: any;
}

export type ThemeType =  
    | "normal"
    | "alfie"
    | "clock"
    | "contact"
    | "projects"
    | "about";

export type ProjectThemeType =  
| "neurify"
| "Nice and Chill"
| "RDM Technology"
| "Tap Flash"
| "none";    

export interface ThemeProps {
  theme: ThemeType;
}