export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User; // если undefined то user unauthorized
    _mounted: boolean;
}
