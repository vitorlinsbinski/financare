import * as S from "./style";
import { Form } from "../Form";
import { useContext, useState } from "react";
import { X } from "phosphor-react";
import FormContext from "../../Context/FormContext";

export function AddNewTransaction() {
  const {
    isOpen,
    setIsOpen,
    setTitle,
    setDate,
    setTag,
    setValue,
    setIsExpense,
    setIsEditing,
  } = useContext(FormContext);

  return (
    <S.Modal className="modal" isOpen={isOpen}>
      <div className="overlay"></div>

      <div className="box">
        <div
          className="closeModal"
          onClick={() => {
            setIsEditing(false);
            setIsOpen(!setIsOpen);
            setTitle("");
            setDate("");
            setTag("");
            setValue("");
            setIsExpense(false);
          }}
        >
          <X size={32} color="#f5f5f5" />
        </div>

        <h2>Register new transaction</h2>
        <Form></Form>
      </div>
    </S.Modal>
  );
}
