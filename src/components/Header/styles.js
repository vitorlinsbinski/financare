import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;

  .left {
    display: flex;
    align-items: center;
    h1 {
      font-weight: 400;
      font-size: 2.6rem;
      line-height: 2.6rem;

      color: #ffffff;
    }

    nav {
      margin-left: 10.7rem;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 4.8rem;

        li {
          cursor: pointer;

          a {
            svg {
              color: #ffffff;
            }

            &.active {
              svg {
                color: rgb(31, 203, 79);
              }
            }
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      display: inline-block;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.6rem;

      color: #ffffff;
    }

    .icon {
      margin-left: 1.6rem;
    }
  }
  @media (max-width: 720px) {
    .left {
      h1 {
        font-size: 2rem;
      }
      nav {
        margin-left: 6.7rem;
      }
    }
  }
`;
