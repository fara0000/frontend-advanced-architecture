import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
};

/**
 Для того чтобы оборачивать каждую сторис в провайдер редакса т.к используем в компонентах Redux
 */
export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
    </StoreProvider>
);
