import { useState } from "react";
import {
  LayoutLeftStyle,
  LayoutRightStyle,
  LayoutStyle,
  LayoutTabStyle,
  TabButton,
} from "./Layout.styles";

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
      </LayoutLeftStyle>
      <LayoutRightStyle></LayoutRightStyle>
    </LayoutStyle>
  );
};

export default Layout;
