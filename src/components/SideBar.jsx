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
  StaffPickItemStyle,
  StaffPicksListStyle,
  StaffPickTitleStyle,
  TopicChipStyle,
  TopicsWrapStyle,
  WhoToFollowStyle,
} from "./SideBar.style";

const Sidebar = () => {
  const staffPicks = [
    {
      id: 1,
      author: "The Medium Handbook for Sales at Medium",
      title:
        "How this brand used Leo Zodiac to explore ideas, repurpose content, and land clients",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      author: "Just Some MO PhD",
      title:
        'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      author: "Lim Nguyen",
      title: "Golden Design Lessons from Tokyo Metro",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=100&h=100&fit=crop",
    },
  ];

  const recommendedTopics = [
    "Data Science",
    "React",
    "Coding",
    "Mental Health",
    "UX",
    "Python",
    "Productivity",
  ];

  const whoToFollow = [
    {
      id: 1,
      name: "Dr. Derek Austin 🥳",
      profileImage:
        "https://tse3.mm.bing.net/th/id/OIP.LFu0x-J-Hxlro7pVZpW8SAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "AI Creative Engineer | Machine Learning Full Stack | The AI Workforce Series",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "iTEXT",
      profileImage:
        "https://www.adgully.com/img/800/201712/levi-slavin.png.jpg",
      description:
        "iTEXT is a platform for IT developers and software developers",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Oliver Shaw",
      profileImage:
        "https://tse1.explicit.bing.net/th/id/OIP.f-PrKHbkKj9w5Ts45oBRyQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Primarily publication in the Java programming.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <SidebarStyle>
      <SectionStyle>
        <SectionTitleStyle>Staff Picks</SectionTitleStyle>
        <StaffPicksListStyle>
          {staffPicks.map((res) => (
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
          {whoToFollow.map((author) => (
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
            width="24"
            height="24"
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
