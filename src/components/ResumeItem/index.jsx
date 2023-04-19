import * as S from "./styles";
import {
  Wallet,
  ArrowCircleDownLeft,
  ArrowCircleUpRight,
} from "phosphor-react";
export function ResumeItem({
  title,
  icon,
  quantity,
  bgColor,
  outlineColor,
  textColor,
}) {
  return (
    <S.CardResume
      bgColor={bgColor}
      outlineColor={outlineColor}
      textColor={textColor}
      title={title}
    >
      <div className="left">
        <h3>{title}</h3>
        {icon == "Wallet" ? (
          <Wallet size={28} color={textColor} weight="duotone" />
        ) : icon == "ArrowDown" ? (
          <ArrowCircleDownLeft size={28} color={textColor} weight="duotone" />
        ) : (
          <ArrowCircleUpRight size={28} color={textColor} weight="duotone" />
        )}
      </div>

      <div className="right">
        <span>$</span>
        <p>{quantity}</p>
      </div>
    </S.CardResume>
  );
}
