import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import {
    StateSchema, ReduxStoreWithManager, AppDispatch, ThunkConfig,
} from './config/StateSchema';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
