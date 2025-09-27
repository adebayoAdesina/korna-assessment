import { Icon } from "@iconify/react";
import {
  PostCardBodyStyle,
  PostCardFooterStyle,
  PostCardHeaderStyle,
  PostCardStyle,
} from "./PostCard.styles";
import { formatTime } from "../utils/formatTime";
import { formatNumber } from "../utils/formatNumber";

const PostCard = (props) => {
  const { data } = props;
  return (
    <PostCardStyle>
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
          <PostCardFooterStyle>
            <div>
              <Icon
                icon="streamline-sharp:star-2-solid"
                width="24"
                height="24"
                style={{ color: "gold" }}
              />
              {formatTime(data.datePosted)}
              <span>
                <Icon
                  icon="tdesign:wave-bye-filled"
                  width="20"
                  height="20"
                  style={{ color: "#6A6A6A" }}
                />{" "}
                {formatNumber(data.totalClapping)}
              </span>
              <span>
                <Icon
                  icon="gravity-ui:comment-fill"
                  width="20"
                  height="20"
                  style={{ color: "#6A6A6A" }}
                />
                {formatNumber(data.totalComment)}
              </span>
            </div>
            <div>
              <Icon icon="simple-line-icons:minus" width="24" height="24" />
              <Icon
                icon="material-symbols:bookmark-add-outline"
                width="24"
                height="24"
              />
              <Icon icon="solar:menu-dots-bold" width="24" height="24" />
            </div>
          </PostCardFooterStyle>
        </div>
        <img src={data.imageUrl} alt={"post image" + data.title} />
      </PostCardBodyStyle>
    </PostCardStyle>
  );
};

export default PostCard;
