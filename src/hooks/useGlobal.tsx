import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";

export default function useAppContext() {
  const context = useContext(GlobalContext);

  if (typeof GlobalContext === "undefined") {
    throw new Error("Erro no contexto");
  }

  return context;
}
