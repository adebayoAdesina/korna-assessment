import styled from "styled-components";

export const SidebarStyle = styled.div`
  width: 100%;
  position: sticky;
  top: 20px;
`;

export const SectionStyle = styled.section`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitleStyle = styled.h3`
  font-size: 16px;
  color: #242424;
  margin-bottom: 16px;
`;

export const StaffPicksListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StaffPickCardStyle = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StaffPickBodyStyle = styled.div`
  flex: 1;
`;

export const StaffPickAuthorStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #6b6b6b;
  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const StaffPickTitleStyle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TopicsWrapStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TopicChipStyle = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: #242424;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6e6e6;
    color: #242424;
  }
`;

export const ButtonStyle = styled.button`
  background: none;
  border: none;
  color: #242424;
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

export const SeeMoreButtonStyle = styled(ButtonStyle)`
  margin-top: 16px;
`;

export const WhoToFollowStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AccountCardStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const AuthorDetailStyle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: contain;
  }
  div {
    flex: 1;
    min-width: 0;
  }
  h5 {
    font-size: 14px;
    font-weight: 500;
    color: #242424;
    margin-bottom: 2px;
  }
  p {
    font-size: 13px;
    color: #6b6b6b;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const FollowButtonStyle = styled.button`
  background: none;
  border: 1px solid #242424;
  border-radius: 20px; 
  color: #242424;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #242424; 
    color: #ffffff;
  }
`;

export const ReadingListStyle = styled.div`
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid #f2f2f2;
`;


export const ReadingStyle = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.4;
  margin-bottom: 16px;

  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0 2px;
    fill: #6b6b6b;
  }
`;

export const FooterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #6b6b6b;
`;

export const FooterLinkStyle = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
