import { createContext } from "react";

const AuthContext = createContext({
    user: null,
    onSetCurrentUser: undefined,
    loading: true,
});

export default AuthContext;