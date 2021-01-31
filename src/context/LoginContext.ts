import { createContext } from 'react';

interface ILoginContext {
  loggedIn: boolean;
  setLoggedIn: (_v: boolean) => void;
}

const LoginContext = createContext<ILoginContext>({
  loggedIn: false,
  setLoggedIn: (_v) => {}
});

export default LoginContext;
