import React from "react";
import PropTypes from "prop-types";

import { ROUTES } from "~/constants";
import * as S from "./styles";

const MenuItem = ({ title, to, icon, activeIcon }) => {
  return (
    <S.MenuItem to={to}>
      {({ isActive }) => (
        <>
          <span className={isActive ? "active_icon" : "icon"}>
            {isActive ? activeIcon : icon}
          </span>
          <h2 className="title">{title}</h2>
        </>
      )}
    </S.MenuItem>
  );
};
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
export default MenuItem;
