import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

/**
 Для того чтобы оборачивать каждую сторис в провайдер редакса т.к используем в компонентах Redux
 */
export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>
);
