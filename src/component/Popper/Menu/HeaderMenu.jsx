import React from "react";
import PropTypes from "prop-types";

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
HeaderMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
export default HeaderMenu;
