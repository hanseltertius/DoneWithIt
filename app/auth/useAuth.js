import { useContext } from "react";
import jwtDecode from 'jwt-decode';
import jwt from 'expo-jwt';

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }

    const register = (user) => {
        const token = jwt.encode(user, "jwtPrivateKey", { "algorithm": "HS256" });
        setUser(user);
        authStorage.storeToken(token);
    }

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return { user, logIn, logOut, register };
}