import styled from "styled-components";
import { colors } from "../utils/colors";

export const NavStyle = styled.nav`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px 3%;
  border-bottom: 1px solid ${colors.gray500};
  img {
    max-width: 80px;
  }
`;

export const NavLeftStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  svg {
    color: ${colors.gray500};
  }
`;
export const SearchInputStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 20px;
  background-color: ${colors.gray200};
  padding: 0 15px;
  border-radius: 15px;
  & > input {
    border: none;
    background-color: transparent;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 760px) {
    background-color: transparent;
    input {
      display: none;
    }
  }
`;

export const NavRightStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  button {
    border: none;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }
  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 1px 1px ${colors.gray200};
    & > img {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    button {
      display: none;
    }
  }
`;

export const WriteButtonStyle = styled.button`
  gap: 10px;
`;
