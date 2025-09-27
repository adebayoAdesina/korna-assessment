import { Icon } from "@iconify/react";
import {
  PostCardBodyStyle,
  PostCardFooterStyle,
  PostCardHeaderStyle,
  PostCardStyle,
  PostClapStyle,
} from "./PostCard.styles";
import { formatTime } from "../utils/formatTime";
import { formatNumber } from "../utils/formatNumber";

const PostCard = (props) => {
  const { data } = props;
  return (
    <PostCardStyle>
      {data.recentClipping && (
        <PostClapStyle>
          <div>
            <Icon
              icon="tdesign:wave-bye-filled"
              width="20"
              height="20"
              style={{ color: "#6A6A6A" }}
            />{" "}
            <div>
              {data.recentClipping.length > 0 &&
                data.recentClipping.map((res) => <span>{res}</span>)}{" "}
              clapped
            </div>
          </div>
          <div className="line"></div>
        </PostClapStyle>
      )}
      <PostCardHeaderStyle>
        <img src={data.groupLogo} alt={"group logo for" + data.postedIn} />
        {data.postedBy === data.postedIn ? (
          <div>
            <span>{data.postedIn}</span>
          </div>
        ) : (
          <div>
            in <span>{data.postedIn}</span> by <span>{data.postedBy}</span>
          </div>
        )}
      </PostCardHeaderStyle>
      <PostCardBodyStyle>
        <div>
          <div>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
        <img src={data.imageUrl} alt={"post image" + data.title} />
      </PostCardBodyStyle>
      <PostCardFooterStyle>
        <div>
          <Icon
            icon="streamline-sharp:star-2-solid"
            style={{ color: "gold" }}
          />
          {formatTime(data.datePosted)}
          <span>
            <Icon icon="tdesign:wave-bye-filled" style={{ color: "#6A6A6A" }} />{" "}
            {formatNumber(data.totalClapping)}
          </span>
          <span>
            <Icon icon="gravity-ui:comment-fill" style={{ color: "#6A6A6A" }} />
            {formatNumber(data.totalComment)}
          </span>
        </div>
        <div>
          <Icon icon="simple-line-icons:minus" width="24" height="24" />
          <Icon icon="material-symbols:bookmark-add-outline" />
          <Icon icon="solar:menu-dots-bold"  />
        </div>
      </PostCardFooterStyle>
    </PostCardStyle>
  );
};

export default PostCard;
