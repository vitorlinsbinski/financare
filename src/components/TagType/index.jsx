import * as S from "./style";

export function TagType({ type, icon, isActive }) {
  return (
    <>
      <S.TagType id={type} isActive={isActive}>
        {icon}
        <S.TagModal className="modalTag">
          <span>{type}</span>
        </S.TagModal>
      </S.TagType>
    </>
  );
}
