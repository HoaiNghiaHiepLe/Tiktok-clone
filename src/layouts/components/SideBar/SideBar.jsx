import React from "react";

import Button from "~/component/Button";
import * as S from "./styles";
const Sidebar = ({ className }) => {
  return (
    <S.SidebarContainer className={className}>
      <S.SidebarContent>
        <Button>Sidebar</Button>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
};

export default Sidebar;
