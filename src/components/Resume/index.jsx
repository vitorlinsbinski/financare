import { useContext } from "react";
import { ResumeItem } from "../ResumeItem";
import * as S from "./styles";
import FormContext from "../../Context/FormContext";

export function Resume() {
  const { incomes, expenses, amount } = useContext(FormContext);

  return (
    <S.ContainerResume>
      <ResumeItem
        title="Wallet"
        icon="Wallet"
        bgColor="#1A2222"
        outlineColor="none"
        textColor="#FFFFFF"
        quantity={amount}
      ></ResumeItem>

      <ResumeItem
        title="Income"
        icon="ArrowDown"
        bgColor="transparent"
        outlineColor="#1FCB4F"
        textColor="#1FCB4F"
        quantity={incomes}
      ></ResumeItem>

      <ResumeItem
        title="Expenses"
        icon="ArrowUp"
        bgColor="transparent"
        outlineColor="#FFC01E"
        textColor="#FFC01E"
        quantity={expenses}
      ></ResumeItem>
    </S.ContainerResume>
  );
}
