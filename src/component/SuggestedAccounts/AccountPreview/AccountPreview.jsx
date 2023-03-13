import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "~/component/Button";
import Image from "~/component/Image";

import * as S from "./styles";

const AccountPreview = () => {
  return (
    <S.AccountPreviewWrapper>
      <div className="header">
        <span className="avatar_wrapper">
          <Image
            fallback="https://www.strivemindz.com/images/ReactJS-Developers.png"
            className="avatar"
            src="https://www.strivemindz.com/images/ReactJS-Developers.png"
            alt="UserAvatar"
          />
        </span>
        <Button className="follow_btn" primary>
          Follow
        </Button>
      </div>
      <div className="info">
        <h4 className="username">
          <span>theanh28entertainment</span>
          <FaCheckCircle className="check_icon" />
        </h4>
        <p className="nickname">Theanh28 Entertainment</p>
      </div>
      <div className="analysis">
        <strong className="analysis_value">8.7M</strong>
        <span className="analysis_label"> Follower</span>
        <strong className="analysis_value">696.2M</strong>
        <span className="analysis_label"> Likes</span>
      </div>
    </S.AccountPreviewWrapper>
  );
};

export default React.memo(AccountPreview);
