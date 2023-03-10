import React from "react";

import Button from "~/component/Button";
import Menu, { MenuItem } from "~/layouts/components/SideBar/Menu";
import { ROUTES } from "~/constants";
import * as S from "./styles";
import {
  HomeIconOutlined,
  UserGroupIconOutlined,
  LiveIconOutlined,
  HomeIconSolid,
  UserGroupIconSolid,
  LiveIconSolid,
} from "~/component/Icons";
const Sidebar = ({ className }) => {
  return (
    <S.SidebarContainer className={className}>
      <S.SidebarContent>
        <aside>
          <Menu>
            <MenuItem
              title="For you"
              to={ROUTES.PUBLIC.HOME}
              icon={<HomeIconOutlined />}
              activeIcon={<HomeIconSolid />}
            />
            <MenuItem
              title="Đang follow"
              to={ROUTES.PUBLIC.FOLLOWING}
              icon={<UserGroupIconOutlined />}
              activeIcon={<UserGroupIconSolid />}
            />
            <MenuItem
              title="LIVE"
              to={ROUTES.PRIVATE.LIVE}
              icon={<LiveIconOutlined />}
              activeIcon={<LiveIconSolid />}
            />
          </Menu>
        </aside>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
};

export default Sidebar;
