import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  max-width: 61rem;
  background-color: #1f2929;
  border-radius: 1.5rem;
  padding: 3.1rem 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  animation: fadeIn 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }

  .left {
    display: flex;
    align-items: center;
    padding-right: 5 rem;

    .icon {
      width: 4.4rem;
      height: 4.4rem;
      padding: 1.2rem;
      border-radius: 1.5rem;
      background-color: #2d3e3a;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      width: 100%;
      max-width: 32rem;
      text-align: left;
      margin-left: 2rem;

      span {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.6rem;

        color: #ffffff;

        opacity: 0.7;
        display: block;
      }

      p {
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 1.9rem;
        margin-top: 0.8rem;

        color: #ffffff;
        word-break: break-word;
      }
    }
  }

  .right {
    text-align: right;
    display: flex;
    align-items: center;

    span {
      font-weight: 500;
      font-size: 1.9rem;
      line-height: 2.2rem;

      color: ${(props) => {
        return props.expense == true ? "#ffc01e" : "#1FCB4F";
      }};

      word-break: break-word;
    }

    .icons {
      margin-left: 3.2rem;
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;

        &:first-child {
          margin-right: 1.6rem;
        }
      }
    }
  }

  @media (max-width: 720px) {
    padding: 2rem 1.9rem;
    row-gap: 2rem;
    align-items: center;

    .left {
      .info {
        max-width: 9rem;
        span {
          font-size: 1.25rem;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }

    .right {
      flex-direction: column;
      align-items: end;
      row-gap: 1.6rem;
      span {
        font-size: 1.7rem;
        line-height: 2rem;
      }
    }
  }

  @keyframes fadeIn {
    from {
      transform: scale(1.15);
      /* transform: translateY(-30px); */
      opacity: 0;
    }
    to {
      transform: scale(1);

      /* transform: translateY(0); */
      opacity: 1;
    }
  }
`;
