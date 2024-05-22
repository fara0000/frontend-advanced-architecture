import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { createReduxStore } from 'app/providers/StoreProvider';
import { ProfileSchema } from 'entities/Profile';

/**
 Для описание стейта который принимает в себе Store из Redux
 */
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    /** Ассинхронные редюсервы */
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

/**
  Ключи(название) всех наших редюсеров
 */
export type StateSchemaKey = keyof StateSchema;

/**
    Описание методов ReducerManager
 */
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

/**
   Расширяем обычный store добавляля туда методы для менеджера
 */
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

/**
 Типизация метода dispatch
*/
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
