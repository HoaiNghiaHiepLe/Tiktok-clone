import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import Image from "../Image";
import * as S from "./styles";

const PopperAccountItem = () => {
  return (
    <S.AccountItemWrapper>
      <span className="avatar_wrapper">
        <Image
          className="avatar"
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628~c5_300x300.webp?x-expires=1677672000&x-signature=mmXT2od3OsLROhQ4cn4A2XtHpL4%3D"
          alt="UserAvatar"
        />
      </span>
      <div className="info">
        <h4 className="username">
          <span>user name</span>
          <FaCheckCircle className="check_icon" />
        </h4>
        <p className="nickname">user nick name</p>
      </div>
    </S.AccountItemWrapper>
  );
};

export default PopperAccountItem;
