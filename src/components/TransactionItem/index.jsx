import * as S from "./styles";
import { Trash, PencilLine } from "phosphor-react";
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

export function TransactionItem({
  expense,
  date,
  title,
  quantity,
  tag,
  onDelete,
  onEditing,
}) {
  return (
    <S.Item expense={expense}>
      <div className="left">
        <div className="icon">
          {tag == "house" ? (
            <House size={20} color="#ffffff" weight="duotone" />
          ) : tag == "education" ? (
            <Pencil size={20} color="#ffffff" weight="duotone" />
          ) : tag == "food" ? (
            <ForkKnife size={20} color="#ffffff" weight="duotone" />
          ) : tag == "health" ? (
            <FirstAidKit size={20} color="#ffffff" weight="duotone" />
          ) : tag == "services" ? (
            <Wrench size={20} color="#ffffff" weight="duotone" />
          ) : tag == "transport" ? (
            <Bus size={20} color="#ffffff" weight="duotone" />
          ) : tag == "trips" ? (
            <Airplane size={20} color="#ffffff" weight="duotone" />
          ) : tag == "shopping" ? (
            <ShoppingBag size={20} color="#ffffff" weight="duotone" />
          ) : tag == "electronics" ? (
            <GameController size={20} color="#ffffff" weight="duotone" />
          ) : (
            <DotsThreeOutline size={20} color="#ffffff" weight="duotone" />
          )}
        </div>
        <div className="info">
          <span>{date}</span>
          <p>{title}</p>
        </div>
      </div>

      <div className="right">
        <span>
          {expense ? "-" : "+"}
          {quantity}
        </span>
        <div className="icons">
          <Trash
            size={22}
            color="#ffffff"
            weight="duotone"
            onClick={onDelete}
          />
          <PencilLine
            size={22}
            color="#ffffff"
            weight="duotone"
            onClick={onEditing}
          />
        </div>
      </div>
    </S.Item>
  );
}
