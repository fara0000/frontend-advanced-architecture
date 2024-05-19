import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchemaKey, StateSchema, ReducerManager } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    // combinedReducer - обьядиняет редюсеры
    let combinedReducer = combineReducers(reducers);

    // Название редюсеров которые мы хотим удалить
    let keysToRemove: StateSchemaKey[] = [];

    return {
        // Получаем редюсеры
        getReducerMap: () => reducers,

        // Обычный редюсер но перед тем как выполниться очищает все удаленные редюсеры
        reduce: (state: StateSchema, action: AnyAction) => {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((reducerKey) => delete state[reducerKey]);

                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}
