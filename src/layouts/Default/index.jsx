import { Outlet, Navigate } from "react-router-dom";
import SideBar from "~/layouts/components/SideBar";

import * as S from "./styles";
const DefaultLayout = () => {
  return (
    <>
      <S.DefaultHeader />
      <S.MainContainer>
        <div className="default_siderbar">
          <SideBar />
        </div>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default DefaultLayout;
