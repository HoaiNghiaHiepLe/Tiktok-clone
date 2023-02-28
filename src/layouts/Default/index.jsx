import { Outlet, Navigate } from "react-router-dom";
import Header from "~/component/Header";
import SideBar from "../SideBar";
import * as S from "./styles";
const DefaultLayout = () => {
  return (
    <>
      <S.MainContainer>
        <Header className="header_default" />
        <S.MainContent>
          <SideBar className="sidebar_default" />
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default DefaultLayout;
