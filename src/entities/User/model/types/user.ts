import { UserRole } from "shared/enums/userRole";

export interface User {
    id: string;
    username: string;
    userRole: UserRole;
    token: string;
}

export interface UserSchema {
    authData?: User;
}
