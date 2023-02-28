import { Outlet, Navigate } from "react-router-dom";
import Header from "~/component/Header";
import SideBar from "../SideBar";
import * as S from "./styles";
const FluidLayout = () => {
  return (
    <>
      <S.MainContainer>
        <Header className="header_fluid" />
        <S.MainContent>
          <SideBar className="sidebar_fluid" />
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default FluidLayout;
