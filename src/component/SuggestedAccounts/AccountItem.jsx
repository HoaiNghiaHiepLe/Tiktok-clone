import React from "react";
import PropTypes from "prop-types";
import HeadlessTippy from "@tippyjs/react/headless";

import { FaCheckCircle } from "react-icons/fa";
import AccountPreview from "./AccountPreview";
import Image from "../Image";

import * as S from "./styles";
const AccountItem = ({ data, hidePreview = false }) => {
  const renderPreview = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      {!hidePreview && <AccountPreview />}
    </div>
  );
  return (
    <div>
      <HeadlessTippy
        offset={[-20, 0]}
        delay={[800, 600]}
        interactive
        placement="bottom"
        render={renderPreview}
      >
        <S.AccountItemWrapper>
          <span className="avatar_wrapper">
            <Image
              fallback="https://www.strivemindz.com/images/ReactJS-Developers.png"
              className="avatar"
              src="https://www.strivemindz.com/images/ReactJS-Developers.png"
              alt="UserAvatar"
            />
          </span>
          <div className="info">
            <h4 className="username">
              <span>User Name</span>
              <FaCheckCircle className="check_icon" />
            </h4>
            <p className="nickname">User Nickname</p>
          </div>
        </S.AccountItemWrapper>
      </HeadlessTippy>
    </div>
  );
};

AccountItem.propTypes = {
  hidePreview: PropTypes.bool,
};
export default React.memo(AccountItem);
