import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

/**
 Для отображение в нескольких тем
 @param theme -- передаем тему нужную
 */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    // Можно было и через функцию сделать как в StyleDecorator разницы нет
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
