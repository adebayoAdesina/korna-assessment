import { Icon } from "@iconify/react";
import {
  NavLeftStyle,
  NavRightStyle,
  NavStyle,
  SearchInputStyle,
  WriteButtonStyle,
} from "./NavBar.styles";
import { MEDIUM_LOGO } from "../constant/appImages";

const NavBar = () => {
  return (
    <NavStyle>
      <NavLeftStyle>
        <Icon icon="mi:menu" width="24" height="24" />

        <img src={MEDIUM_LOGO} alt="" />

        <SearchInputStyle>
          <Icon icon="cuida:search-outline" width="24" height="24" />
          <input placeholder="Search" />
        </SearchInputStyle>
      </NavLeftStyle>
      <NavRightStyle>
        <WriteButtonStyle>
          <Icon
            icon="material-symbols-light:edit-square-outline-sharp"
            width="24"
            height="24"
          />
          Write
        </WriteButtonStyle>
        <button>
          <Icon icon="hugeicons:notification-01" width="24" height="24" />
        </button>
        <div>
          <img
            src="https://th.bing.com/th?id=OIF.qJ82wSmvWjEkqP9o%2bGzokQ&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
          />
        </div>
      </NavRightStyle>
    </NavStyle>
  );
};

export default NavBar;
