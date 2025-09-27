import styled from "styled-components";
import { colors } from "../utils/colors";

export const LayoutStyle = styled.main`
  display: flex;
`;

export const LayoutLeftStyle = styled.section`
  padding: 60px 10%;
  width: 100%;
`;

export const LayoutTabStyle = styled.div`
  border-bottom: 1px solid ${colors.gray500};
  display: flex;
  gap: 30px;
`;

export const TabButton = styled.button`
  padding: 0 0px 16px 2px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.$active ? "2px solid black" : "3px solid transparent"};
  font-weight: ${(props) => (props.$active ? 600 : "normal")};
  color: ${(props) => (props.$active ? "" : "grey")};
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 3px solid ${colors.gray400};
  }
`;

export const LayoutRightStyle = styled.section`
  background-color: red;
  width: 800px;
`;
