import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { CounterSchema } from 'entities/Counter';

// createSelector - reselector который позволяет переиспользовать другие селекторые которые у нас есть
// нужен и полезен для мемоизации, запоминает в кэше и у нас быстро и оптимизированно возвращается то что нам нужно
// пересчитываться результат будет только тогда когда значение из главного селектора изменится
// Можно несколько selector'ов использовать и их комбинировать и получать то что нужно нам из кэша
// reselect и в целом createSelector стоит использовать там где есть вычесления
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
