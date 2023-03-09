import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";
const PopperWrapper = ({ children, className }) => {
  return <S.PopperWrapper className={className}>{children}</S.PopperWrapper>;
};
PopperWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default PopperWrapper;
