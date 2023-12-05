import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

// Для глобального доступа тем
export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    // Для мемоизации обьекта который передаем в ThemeContext
    // (чтобы возвращать из кэша тот же самый обьект если из зависимостей ничего не изменилось)
    // иначе каждый раз будет создаваться новый обьект или новая ссылка
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {/* так как будем оборачивать в текущей провайдер все компоненты */}
            {children}
        </ThemeContext.Provider>
    );
};
