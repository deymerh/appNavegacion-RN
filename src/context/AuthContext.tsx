import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

export interface AuthState {
  isLogedIn: boolean;
  username?: string;
  favoriteIcon?: string;
};

export const authInitialState: AuthState = {
  isLogedIn: false,
  username: undefined,
  favoriteIcon: undefined
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);
  const signIn = () => {
    dispatch({ type: 'signIn' });
  }
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavorite', payload: iconName })
  }
  const logout = () => {
    dispatch({ type: 'logout' })
  }
  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoriteIcon,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}