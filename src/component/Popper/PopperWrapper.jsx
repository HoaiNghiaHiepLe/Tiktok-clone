import React from "react";

import * as S from "./styles";
const PopperWrapper = ({ children, className }) => {
  return <S.PopperWrapper className={className}>{children}</S.PopperWrapper>;
};

export default PopperWrapper;
