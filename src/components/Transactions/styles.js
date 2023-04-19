import styled from "styled-components";

export const Transactions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2.2rem;
  width: 100%;
  max-width: 61rem;
  margin: 0 auto;
  margin-top: 4rem;
  background-color: #1a2222;
  border-radius: 1rem;
  padding: 2.5rem 3rem;

  @media (max-width: 720px) {
    margin-top: 3rem;
    padding: 2rem 1.3rem;
  }
`;

export const HeaderTransaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #1fcb4f;
  }

  svg {
    cursor: pointer;
    transition: all 0.3s;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const Charts = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`;
