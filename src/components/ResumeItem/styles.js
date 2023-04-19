import styled from "styled-components";

export const CardResume = styled.div`
  width: 100%;
  max-width: 41rem;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.outlineColor};
  border-radius: 1.6rem;
  padding: 3.9rem 2.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-break: break-word;
  animation: fadeIn 0.4s ease-out;

  .left {
    text-align: left;
    padding-right: 8.2rem;
    h3 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      color: ${(props) => props.textColor};
    }

    svg {
      margin-top: 3.1rem;
    }
  }

  .right {
    text-align: right;
    span {
      font-weight: 400;
      font-size: 2.6rem;
      line-height: 2.9rem;

      color: ${(props) => props.textColor};
      display: block;
    }

    p {
      font-weight: ${(props) => {
        return props.title == "Wallet" ? 600 : 400;
      }};
      font-size: 4.2rem;
      line-height: 4.2rem;
      color: ${(props) => props.textColor};
      margin-top: 1rem;
      animation: fadeRight 0.5s ease-out;
    }
  }

  @media (max-width: 991px) {
    padding: 2.9rem 1.9rem;
  }

  @media (max-width: 720px) {
    .left {
      padding-right: 2rem;
    }
    .right {
      p {
        font-size: 3.2rem;
        line-height: 3.2rem;
      }
    }
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

  @keyframes fadeRight {
    from {
      transform: translateX(30px);

      opacity: 0;
    }
    to {
      transform: translateX(0);

      opacity: 1;
    }
  }
`;
