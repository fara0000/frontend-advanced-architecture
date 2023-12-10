import {createContext} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

// нужно обязательно послежнюю выбранную тему сохранять в ЛС чтобы пользователь когда зашел она все еще была
export const LOCAL_STORAGE_THEME_KEY = 'theme';
