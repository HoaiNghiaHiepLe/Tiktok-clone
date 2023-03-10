import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};
Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
