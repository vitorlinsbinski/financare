import styled from "styled-components";

export const ContainerResume = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
