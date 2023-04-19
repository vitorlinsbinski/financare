import styled from "styled-components";

export const FormArea = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 3.6rem;
  column-gap: 4.3rem;
  flex-wrap: wrap;
`;

export const InputArea = styled.div`
  &.tags {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  &.typeArea {
    width: 29.1rem;
    .radioSelect {
      display: flex;
      align-items: center;

      .option {
        display: flex;
        align-items: center;
        &:not(:last-child) {
          margin-right: 4.3rem;
        }

        input[type="radio"] {
          margin-right: 1.2rem;
        }

        span {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;

          color: #ffffff;

          opacity: 0.6;
        }
      }
    }
  }

  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    display: block;
    margin-bottom: 1.6rem;

    color: #ffffff;
  }

  input[type="text"],
  input[type="number"],
  input[type="date"] {
    width: 29.1rem;
    background-color: #283532;
    color: #ffffff;
    padding: 0 2rem;
    height: 5rem;
    border-radius: 1rem;
    font-family: "Poppins", sans-serif;
  }

  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 1rem;
  font-size: 1.4rem;
  position: absolute;
  right: 0;
  top: -1rem;
  color: #ffc01e;
  font-weight: 400;
  transition: all 0.3s;
  transform: ${(props) =>
    props.isFormError ? "translateX(0)" : "translateX(20px)"};
  opacity: ${(props) => (props.isFormError ? "1" : "0")};
`;
