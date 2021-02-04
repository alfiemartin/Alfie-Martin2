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
    | "secret"
    | "about";

export type ProjectThemeType =  
| "none"
| "neurify"
| "Nice and Chill"
| "RDM Technology"
| "Tap Flash";    

export interface ThemeProps {
  theme: ThemeType;
}