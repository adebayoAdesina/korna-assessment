import styled from "styled-components";
import { colors } from "../utils/colors";

export const PostCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 45px 0;
  border-bottom: 1px solid ${colors.gray400};
`;

export const PostClapStyle = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    span {
      font-weight: 600;
    }
  }
  div.line {
    height: 10px;
    border: 1px solid ${colors.gray500};
    width: fit-content;
    margin: 15px 0;
  }
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
  @media (max-width: 450px) {
    img {
      width: 19px;
      height: 18px;
    }
    div {
      font-size: 13px;
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
  @media (max-width: 950px) {
    div {
      div {
        h4 {
          font-size: 24px;
          padding: 0;
          margin: 0;
        }
        p {
          color: ${colors.gray600};
        }
      }
    }
    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  @media (max-width: 450px) {
    div {
      div {
        h4 {
          font-size: 18px;
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 14px;
          color: ${colors.gray600};
        }
      }
    }
    img {
      width: 110px;
      height: 80px;
      object-fit: cover;
    }
  }
`;

export const PostCardFooterStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  width: 65%;
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
    svg {
      width: 20px;
      height: 20px;
    }
  }
  div:nth-child(2) {
    justify-content: end;
  }
  @media (max-width: 760px) {
    width: 100%;
    padding-top: 6px;
    div {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      span {
        display: flex;
        align-items: center;
        gap: 3px;
      }
    }
  }
`;
