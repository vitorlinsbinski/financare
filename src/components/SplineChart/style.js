import styled from "styled-components";

export const Chart = styled.section`
  width: 100%;
  max-width: 77rem;
  background-color: #1a2222;
  padding: 2.8rem 3.6rem;
  border-radius: 1rem;
  margin-top: 4rem;
  animation: fadeIn 0.4s ease-out;

  h2 {
    color: white;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 4rem;
    font-weight: 500;
  }

  @media (max-width: 1300px) {
    width: 100%;
    max-width: 78rem;
  }

  @media (max-width: 991px) {
    margin-top: 0;
  }

  @media (max-width: 720px) {
    padding: 1.8rem 1.6rem;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(30px);
      /* transform: translateY(-30px); */
      opacity: 0;
    }
    to {
      transform: translateY(0);

      /* transform: translateY(0); */
      opacity: 1;
    }
  }
`;
