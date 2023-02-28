import { Outlet, Navigate } from "react-router-dom";
import Header from "~/component/Header";
import SideBar from "../SideBar";
import * as S from "./styles";
const PrivateLayout = () => {
  return (
    <>
      <S.MainContainer>
        <Header />
        <S.MainContent>
          <SideBar />
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default PrivateLayout;
