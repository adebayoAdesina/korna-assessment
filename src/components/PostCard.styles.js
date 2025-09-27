import styled from "styled-components";
import { colors } from "../utils/colors";

export const PostCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 45px 0;
  border-bottom: 1px solid ${colors.gray400};
`;

export const PostCardHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  div {
    color: ${colors.gray600};
    font-size: 15px;
    span {
      font-weight: 600;
      color: #403e3eff;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const PostCardBodyStyle = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 65%;
    div {
      width: 100%;
      &:hover {
        cursor: pointer;
      }
      h4 {
        font-size: 30px;
        padding: 0;
        margin: 0;
      }
      p {
        color: ${colors.gray600};
      }
    }
  }
  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
  }
`;

export const PostCardFooterStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${colors.gray600};
    span {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
  div:nth-child(2) {
    justify-content: end;
  }
`;
