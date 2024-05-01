import { CounterSchema } from 'entities/Counter';

/**
 Для описание стейта который принимает в себе Store из Redux
 */
export interface StateSchema {
    counter: CounterSchema;
}
