import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

// нужно обязательно послежнюю выбранную тему сохранять в Local storage чтобы пользователь когда обратно зашел на сайт она все еще была
export const LOCAL_STORAGE_THEME_KEY = 'theme';
