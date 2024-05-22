import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';

/**
    Cобственный useDispatch с типами
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
