import { ProfileSchema } from 'entities/Profile';

export const getProfileReadonly = (state: ProfileSchema) => state.readonly;
