import 'app/styles/index.scss';
import { Story } from '@storybook/react';

/**
    Для глобальных стилей в рамках сторибука
    @param story -- передаем функцию которая возвращет стори
 */
export const StyleDecorator = (story: () => Story) => story();
