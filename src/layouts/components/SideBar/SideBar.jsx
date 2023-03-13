import React from "react";

import Menu, { MenuItem } from "~/layouts/components/SideBar/Menu";
import { ROUTES } from "~/constants";
import {
  HomeIconOutlined,
  UserGroupIconOutlined,
  LiveIconOutlined,
  HomeIconSolid,
  UserGroupIconSolid,
  LiveIconSolid,
} from "~/component/Icons";
import SuggestedAccounts from "~/component/SuggestedAccounts";

import * as S from "./styles";
const Sidebar = ({ className }) => {
  const accounts = [
    { id: 1, name: "Account 1" },
    { id: 2, name: "Account 2" },
    { id: 3, name: "Account 3" },
  ];
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
          <SuggestedAccounts accounts={accounts} label="Suggested accounts" />
          <SuggestedAccounts
            accounts={accounts}
            label="Following accounts"
            hidePreview
          />
        </aside>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
};

export default Sidebar;
