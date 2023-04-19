import { useContext } from "react";
import FormContext from "../Context/FormContext";

function useFormContext() {
  const context = useContext(FormContext);
  return context;
}

export default useFormContext;
