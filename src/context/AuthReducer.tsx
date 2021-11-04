import { AuthState } from "./AuthContext";

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavorite', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLogedIn: true,
        username: 'no-user-yet'
      }
    case 'changeFavorite':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'logout':
      return {
        ...state,
        isLogedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }
    default:
      return state;
  }
  return state;
}
