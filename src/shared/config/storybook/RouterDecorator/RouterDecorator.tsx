import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

/**
 Для того чтобы оборачивать каждую сторис в роутер т.к есть ссылки и ткд
 */
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
