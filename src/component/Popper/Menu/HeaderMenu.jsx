import React from "react";

import { BackIcon } from "~/component/Icons";

import * as S from "./styles";
const HeaderMenu = ({ title, onBack }) => {
  return (
    <S.HeaderMenu>
      <button className="back_btn" onClick={onBack}>
        <BackIcon className="back_icon" />
      </button>
      <h4 className="header_title">{title}</h4>
    </S.HeaderMenu>
  );
};

export default HeaderMenu;
