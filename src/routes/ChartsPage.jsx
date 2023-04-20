import GlobalStyles from "../GlobalStyles";
import { Transactions } from "../components/Transactions";
import { useState, useEffect } from "react";
import { AddNewTransaction } from "../components/AddNewTransaction";
import { useContext } from "react";
import FormContext from "../Context/FormContext";

export function ChartsPage() {
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [amount, setAmount] = useState(0);

  const items = localStorage.getItem("finances");
  const [finances, setFinances] = useState([items ? JSON.parse(items) : []]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("finances"));
    if (finances) {
      setFinances(items);
    }
  }, []);

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <FormContext.Provider
        value={{
          finances,
          setFinances,
          incomes,
          expenses,
          amount,
        }}
      >
        <Transactions></Transactions>

        <AddNewTransaction></AddNewTransaction>
      </FormContext.Provider>
    </>
  );
}
