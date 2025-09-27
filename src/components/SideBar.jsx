import { Icon } from "@iconify/react";
import {
  AccountCardStyle,
  AuthorDetailStyle,
  ButtonStyle,
  FollowButtonStyle,
  FooterLinkStyle,
  FooterStyle,
  ReadingListStyle,
  ReadingStyle,
  SectionStyle,
  SectionTitleStyle,
  SeeMoreButtonStyle,
  SidebarStyle,
  StaffPickAuthorStyle,
  StaffPickBodyStyle,
  StaffPickCardStyle,
  StaffPicksListStyle,
  StaffPickTitleStyle,
  TopicChipStyle,
  TopicsWrapStyle,
  WhoToFollowStyle,
} from "./SideBar.style";
import { staffPicksData } from "../data/staffPicksData";
import { whoToFollowData } from "../data/whoToFollowData";

const Sidebar = () => {
  const recommendedTopics = [
    "Data Science",
    "React",
    "Coding",
    "Mental Health",
    "UX",
    "Python",
    "Productivity",
  ];

  return (
    <SidebarStyle>
      <SectionStyle>
        <SectionTitleStyle>Staff Picks</SectionTitleStyle>
        <StaffPicksListStyle>
          {staffPicksData.map((res) => (
            <StaffPickCardStyle key={res.id}>
              <StaffPickBodyStyle>
                <StaffPickAuthorStyle>
                  <img src={res.profileImage} alt="" />
                  <span>{res.author}</span>
                </StaffPickAuthorStyle>
                <StaffPickTitleStyle>{res.title}</StaffPickTitleStyle>
              </StaffPickBodyStyle>
              <img src={res.image} alt={res.title + res.id} />
            </StaffPickCardStyle>
          ))}
        </StaffPicksListStyle>
      </SectionStyle>

      <SectionStyle>
        <SectionTitleStyle>Recommended topics</SectionTitleStyle>
        <TopicsWrapStyle>
          {recommendedTopics.map((topic) => (
            <TopicChipStyle key={topic}>{topic}</TopicChipStyle>
          ))}
        </TopicsWrapStyle>
        <ButtonStyle>See more topics</ButtonStyle>
      </SectionStyle>

      <SectionStyle>
        <SectionTitleStyle>Who to follow</SectionTitleStyle>
        <WhoToFollowStyle>
          {whoToFollowData.map((author) => (
            <AccountCardStyle key={author.id}>
              <AuthorDetailStyle>
                <img src={author.avatar} alt={author.id} />
                <div>
                  <h5>{author.name}</h5>
                  <p>{author.description}</p>
                </div>
              </AuthorDetailStyle>
              <FollowButtonStyle>Follow</FollowButtonStyle>
            </AccountCardStyle>
          ))}
        </WhoToFollowStyle>
        <SeeMoreButtonStyle>See more suggestions</SeeMoreButtonStyle>
      </SectionStyle>

      <ReadingListStyle>
        <SectionTitleStyle>Reading list</SectionTitleStyle>
        <ReadingStyle>
          Click the
          <Icon
            icon="material-symbols:bookmark-add-outline"
          />
          on any story to easily add it to your reading list or a custom list
          that you can share.
        </ReadingStyle>

        <FooterStyle>
          <FooterLinkStyle>Help</FooterLinkStyle>
          <FooterLinkStyle>Status</FooterLinkStyle>
          <FooterLinkStyle>About</FooterLinkStyle>
          <FooterLinkStyle>Careers</FooterLinkStyle>
          <FooterLinkStyle>Privacy</FooterLinkStyle>
          <FooterLinkStyle>Terms</FooterLinkStyle>
          <FooterLinkStyle>Text to speech</FooterLinkStyle>
        </FooterStyle>
      </ReadingListStyle>
    </SidebarStyle>
  );
};

export default Sidebar;
