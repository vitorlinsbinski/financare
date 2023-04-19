import * as S from "./style";

export function Button({ text, type }) {
  return <S.Button type={type}>{text}</S.Button>;
}
