import styled from "styled-components";

export const TagType = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 1.5rem;
  background-color: ${(props) => (props.isActive ? "#1B725E" : "#2d3e3a")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.08);
    .modalTag {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const TagModal = styled.div`
  line-height: 2.4rem;
  padding: 0 1.2rem;
  border-radius: 1rem;
  background-color: rgba(45, 62, 58, 0.8);
  position: absolute;
  top: -2.8rem;
  transform: translateY(20px);
  transition: all 0.4s;
  opacity: 0;
  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: #ffffff;
  }
`;
