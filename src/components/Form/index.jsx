import * as S from "./style";
import {
  House,
  Pencil,
  ForkKnife,
  FirstAidKit,
  Wrench,
  Bus,
  Airplane,
  ShoppingBag,
  GameController,
  DotsThreeOutline,
} from "phosphor-react";
import { TagType } from "../TagType";
import { Button } from "../Button";
import { useContext, useState } from "react";
import FormContext from "../../Context/FormContext";

export function Form() {
  const {
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
    finances,
    setFinances,
    isOpen,
    setIsOpen,
    isEditing,
    setIsEditing,
    idEdit,
    setIdEdit,
  } = useContext(FormContext);

  console.log("finaças:", finances);

  function generateId() {
    return Math.round(Math.random() * 10000);
  }

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDatError] = useState(false);
  const [isTagError, setIsTagError] = useState(false);
  const [isValueError, setIsValueError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    function clearAll() {
      setIsOpen(!isOpen);
      setTitle("");
      setDate("");
      setTag("house");
      setValue("");
      setIsExpense(false);

      setIsTitleError(false);
      setIsDatError(false);
      setIsValueError(false);
      setIsTypeError(false);
    }

    if (!isEditing) {
      if (title !== "" && date !== "" && tag !== "" && value !== "") {
        const newFinance = [
          ...finances,
          {
            id: generateId(),
            title: title,
            date: new Date(date),
            value: value,
            isExpense: isExpense,
            tag: tag,
          },
        ];
        console.log("new:", newFinance);

        let financesByDate = newFinance.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });

        console.log("finanças pro data:", financesByDate);

        setFinances(financesByDate);

        clearAll();
      } else {
        if (title == "") {
          setIsTitleError(true);
        } else {
          setIsTitleError(false);
        }

        if (date == "") {
          setIsDatError(true);
        } else {
          setIsDatError(false);
        }
        if (tag == "") {
          setIsTagError(true);
        } else {
          setIsTagError(false);
        }
        if (value == "") {
          setIsValueError(true);
        } else {
          setIsValueError(false);
        }
      }
    } else {
      const newArr = finances.map((finance) => {
        if (finance.id == idEdit) {
          return {
            id: generateId(),
            title: title,
            date: new Date(date),
            value: value,
            isExpense: isExpense,
            tag: tag,
          };
        } else {
          return finance;
        }
      });

      let financesByDate = newArr.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      console.log("finanças por data edit:", financesByDate);

      setFinances(financesByDate);

      setIsEditing(false);
      clearAll();
    }
  }

  return (
    <S.FormArea onSubmit={handleSubmit}>
      <S.InputArea>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Type the title of your finance"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <S.ErrorMessage className="errorMsg" isFormError={isTitleError}>
          You have to type something
        </S.ErrorMessage>
      </S.InputArea>

      <S.InputArea>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id=""
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <S.ErrorMessage className="errorMsg" isFormError={isDateError}>
          You have to select a date
        </S.ErrorMessage>
      </S.InputArea>

      <S.InputArea className="tags">
        <label htmlFor="tag">Tag:</label>
        <ul className="tags">
          <li
            onClick={() => {
              setTag("house");
            }}
          >
            <TagType
              type="house"
              isActive={tag == "house"}
              icon={<House size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);
              setTag("education");
            }}
          >
            <TagType
              type="education"
              isActive={tag == "education"}
              icon={<Pencil size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("food");
            }}
          >
            <TagType
              type="food"
              isActive={tag == "food"}
              icon={<ForkKnife size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("health");
            }}
          >
            <TagType
              type="health"
              isActive={tag == "health"}
              icon={<FirstAidKit size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("services");
            }}
          >
            <TagType
              type="services"
              isActive={tag == "services"}
              icon={<Wrench size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("transport");
            }}
          >
            <TagType
              type="transport"
              isActive={tag == "transport"}
              icon={<Bus size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("trips");
            }}
          >
            <TagType
              type="trips"
              isActive={tag == "trips"}
              icon={<Airplane size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("shopping");
            }}
          >
            <TagType
              type="shopping"
              isActive={tag == "shopping"}
              icon={<ShoppingBag size={24} color="#f5f5f5" weight="duotone" />}
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("electronics");
            }}
          >
            <TagType
              type="electronics"
              isActive={tag == "electronics"}
              icon={
                <GameController size={24} color="#f5f5f5" weight="duotone" />
              }
            ></TagType>
          </li>

          <li
            onClick={() => {
              setTag(tag);

              setTag("others");
            }}
          >
            <TagType
              type="others"
              isActive={tag == "others"}
              icon={
                <DotsThreeOutline size={24} color="#f5f5f5" weight="duotone" />
              }
            ></TagType>
          </li>
        </ul>
        <S.ErrorMessage className="errorMsg" isFormError={isTagError}>
          You have to select a tag
        </S.ErrorMessage>
      </S.InputArea>

      <S.InputArea>
        <label htmlFor="value">Value:</label>
        <input
          type="number"
          name="value"
          id=""
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <S.ErrorMessage className="errorMsg" isFormError={isValueError}>
          You have to type the value
        </S.ErrorMessage>
      </S.InputArea>

      <S.InputArea className="typeArea">
        <label htmlFor="type">Type:</label>

        <div className="radioSelect">
          <div className="option">
            <input
              type="radio"
              name="type"
              id=""
              checked={isExpense == false}
              onChange={() => setIsExpense(!isExpense)}
            />
            <span>Income</span>
          </div>

          <div className="option">
            <input
              type="radio"
              name="type"
              id=""
              checked={isExpense == true}
              onChange={() => setIsExpense(!isExpense)}
            />
            <span>Expense</span>
          </div>
        </div>
        <S.ErrorMessage className="errorMsg" isFormError={isTypeError}>
          You have to select type
        </S.ErrorMessage>
      </S.InputArea>
      {isEditing ? (
        <Button text={"Save"} type="submit"></Button>
      ) : (
        <Button text={"Add"} type="submit"></Button>
      )}
    </S.FormArea>
  );
}
