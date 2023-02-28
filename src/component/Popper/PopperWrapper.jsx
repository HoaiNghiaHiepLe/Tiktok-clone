import React from "react";
import PopperAccountItem from "../PopperAccountItem";

import * as S from "./styles";
const PopperWrapper = ({ children, className }) => {
  return (
    <S.PopperWrapper className={className}>
      <span>{children}</span>
      <PopperAccountItem />
    </S.PopperWrapper>
  );
};

export default PopperWrapper;
