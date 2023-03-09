import React from "react";
import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Image from "../Image/Image";
import * as S from "./styles";
import { ROUTES } from "~/constants";

const PopperAccountItem = ({ data }) => {
  return (
    <S.AccountItemWrapper>
      <Link
        className="account_link"
        to={generatePath(ROUTES.PRIVATE.PROFILE, {
          nickname: `${data.nickname}`,
        })}
      >
        <span className="avatar_wrapper">
          <Image
            fallback="https://www.strivemindz.com/images/ReactJS-Developers.png"
            className="avatar"
            src={data.avatar}
            alt="UserAvatar"
          />
        </span>
        <div className="info">
          <h4 className="username">
            <span>{data.full_name}</span>
            {data.tick && <FaCheckCircle className="check_icon" />}
          </h4>
          <p className="nickname">{data.nickname}</p>
        </div>
      </Link>
    </S.AccountItemWrapper>
  );
};

PopperAccountItem.propTypes = {
  data: PropTypes.object,
};

export default PopperAccountItem;
