import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

// Для глобального доступа тем
export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    // Для мемоизации обьекта который передаем в ThemeContext
    // (чтобы возвращать из кэша тот же самый обьект если из зависимостей ничего не изменилось)
    // иначе каждый раз будет создаваться новый обьект или новая ссылка
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {/* так как будем оборачивать в текущей провайдер все компоненты */}
            {children}
        </ThemeContext.Provider>
    );
};
