import { useState } from "react";
import {
  LayoutLeftStyle,
  LayoutRightStyle,
  LayoutStyle,
  LayoutTabStyle,
  TabButton,
} from "./Layout.styles";
import { postData } from "../data/postData";
import PostCard from "./PostCard";
import Sidebar from "./SideBar";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const buttonList = ["For you", "Featured"];
  return (
    <LayoutStyle>
      <LayoutLeftStyle>
        <LayoutTabStyle>
          {buttonList.map((res, index) => (
            <TabButton
              key={index + res}
              onClick={() => setActiveTab(index)}
              $active={activeTab === index}
            >
              {res}
            </TabButton>
          ))}
        </LayoutTabStyle>
        {postData.map((res, index) => (
          <PostCard data={res} key={index + res.title} />
        ))}
      </LayoutLeftStyle>
      <LayoutRightStyle>
        <Sidebar />
      </LayoutRightStyle>
    </LayoutStyle>
  );
};

export default Layout;
