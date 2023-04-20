import GlobalStyles from "../GlobalStyles";
import { Transactions } from "../components/Transactions";
import FormContext from "../Context/FormContext";
import { useState, useEffect } from "react";
import { AddNewTransaction } from "../components/AddNewTransaction";
import { useContext } from "react";

export function TransactionsPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("house");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [amount, setAmount] = useState(0);

  const [isEditing, setIsEditing] = useState(false);
  const [idEdit, setIdEdit] = useState("");

  function returnLocalStorage() {
    const item = JSON.parse(localStorage.getItem("finances"));

    if (item !== null) {
      return item;
    } else {
      return [];
    }
  }

  const item = returnLocalStorage();

  const [finances, setFinances] = useState(item);

  const [isHome, setIsHome] = useState(false);
  const [isTransactionsPage, setIsTransactionsPage] = useState(true);

  function handleDelete(id) {
    const selectedItems = finances.filter((finance) => {
      return finance.id !== id;
    });
    setFinances(selectedItems);
  }

  function handleEditing(id) {
    setIdEdit(id);
    setIsEditing(true);
    const toEdit = finances.find((finance) => {
      return finance.id == id;
    });
    setTitle(toEdit.title);
    setDate(toEdit.date);
    setTag(toEdit.tag);
    setValue(toEdit.value);
    setIsExpense(toEdit.isExpense);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    localStorage.setItem("finances", JSON.stringify(finances));

    const amountIncomes = finances
      ?.filter((finance) => {
        return !finance.isExpense;
      })
      .map((finance) => {
        {
          return Number(finance.value);
        }
      })
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);

    const amountExpenses = finances
      ?.filter((finance) => {
        return finance.isExpense;
      })
      .map((finance) => {
        {
          return Number(finance.value);
        }
      })
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);

    const total = amountIncomes - amountExpenses;

    setIncomes(amountIncomes.toFixed(2));
    setExpenses(amountExpenses.toFixed(2));
    setAmount(total.toFixed(2));
  }, [finances]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("finances"));
    setFinances(items);
  }, []);

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <FormContext.Provider
        value={{
          title,
          setTitle,
          date,
          setDate,
          tag,
          setTag,
          value,
          setValue,
          isExpense,
          setIsExpense,
          isOpen,
          setIsOpen,
          finances,
          setFinances,
          incomes,
          expenses,
          amount,
          handleDelete,
          handleEditing,
          isEditing,
          setIsEditing,
          idEdit,
          setIdEdit,
          isHome,
          isTransactionsPage,
        }}
      >
        <Transactions></Transactions>

        <AddNewTransaction></AddNewTransaction>
      </FormContext.Provider>
    </>
  );
}
