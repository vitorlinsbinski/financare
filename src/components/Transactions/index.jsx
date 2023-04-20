import { useContext } from "react";
import { TransactionItem } from "../TransactionItem";
import * as S from "./styles";
import { Plus } from "phosphor-react";
import FormContext from "../../Context/FormContext";
import { SplineChart } from "../SplineChart";
import { PieChart } from "../PieChart";

export function Transactions() {
  const {
    isOpen,
    setIsOpen,
    finances,
    handleDelete,
    handleEditing,
    isTransactionsPage,
    isHome,
  } = useContext(FormContext);

  function addZeroToDate(num) {
    if (num < 9) {
      return "0" + num;
    } else {
      return num;
    }
  }

  return (
    <S.Body>
      {isHome && (
        <>
          <S.Charts>
            <SplineChart></SplineChart>
            <PieChart></PieChart>
          </S.Charts>
          <S.Transactions>
            <S.HeaderTransaction>
              <h2>Transactions</h2>
              <Plus
                size={24}
                color="#1fcb4f"
                onClick={() => setIsOpen(!isOpen)}
              />
            </S.HeaderTransaction>

            {finances &&
              finances?.map((finance) => {
                // let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const date = new Date(finance.date);

                return (
                  <TransactionItem
                    expense={finance.isExpense}
                    date={
                      addZeroToDate(date.getUTCDate()) +
                      "/" +
                      addZeroToDate(date.getMonth() + 1) +
                      "/" +
                      date.getFullYear()
                    }
                    title={finance.title}
                    quantity={finance.value}
                    tag={finance.tag}
                    key={finance.id}
                    onDelete={() => handleDelete(finance.id)}
                    onEditing={() => handleEditing(finance.id)}
                  ></TransactionItem>
                );
              })}
          </S.Transactions>
        </>
      )}
      {!isTransactionsPage && !isHome && (
        <S.Charts>
          <SplineChart></SplineChart>
          <PieChart></PieChart>
        </S.Charts>
      )}

      {isTransactionsPage && (
        <S.Transactions>
          <S.HeaderTransaction>
            <h2>Transactions</h2>
            <Plus
              size={24}
              color="#1fcb4f"
              onClick={() => setIsOpen(!isOpen)}
            />
          </S.HeaderTransaction>

          {finances &&
            finances?.map((finance) => {
              // let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              const date = new Date(finance.date);

              return (
                <TransactionItem
                  expense={finance.isExpense}
                  date={
                    addZeroToDate(date.getDate()) +
                    "/" +
                    addZeroToDate(date.getMonth() + 1) +
                    "/" +
                    date.getFullYear()
                  }
                  title={finance.title}
                  quantity={finance.value}
                  tag={finance.tag}
                  key={finance.id}
                  onDelete={() => handleDelete(finance.id)}
                  onEditing={() => handleEditing(finance.id)}
                ></TransactionItem>
              );
            })}
        </S.Transactions>
      )}
    </S.Body>
  );
}
