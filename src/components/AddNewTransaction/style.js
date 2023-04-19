import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2023;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  transition: all 0.3s;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
  }

  .box {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 78.7rem;
    height: 70rem;
    background: #1a2222;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out;
    padding: 6.7rem 8rem;
    transition: all 0.3s;
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-20px)"};
    opacity: ${(props) => (props.isOpen ? "100" : "0")};

    .closeModal {
      position: absolute;
      top: 3rem;
      right: 3rem;
      cursor: pointer;
    }

    h2 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 2.4rem;

      color: #ffffff;
      margin-bottom: 4.5rem;
    }
  }
`;
