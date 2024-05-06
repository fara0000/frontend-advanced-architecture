import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

/**
 Для описание стейта который принимает в себе Store из Redux
 */
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
