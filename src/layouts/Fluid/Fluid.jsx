import { Outlet, Navigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import * as S from "./styles";
const FluidLayout = () => {
  return (
    <>
      <S.FluidHeader />
      <S.MainContainer>
        <div className="sidebar_container">
          <SideBar className="sidebar_fluid" />
        </div>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default FluidLayout;
