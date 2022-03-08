import { createContext, ReactNode } from "react";
import useGlobalProvider from "../hooks/useGlobalProvider";
import { IContext } from "../interfaces";

interface IUseGlobalContext {
  children: ReactNode;
}

export const GlobalContext = createContext({} as IContext);

export function UseGlobalContext(props: IUseGlobalContext) {
  const globalProvider = useGlobalProvider();

  return (
    <GlobalContext.Provider value={globalProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
